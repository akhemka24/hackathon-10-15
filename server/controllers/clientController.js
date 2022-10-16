const Client = require('../models/Client.js');

module.exports = {
	/** Display list of all Clients */
	client_list: async(_req, res, next) => {
		try {
			const clients = await Client.find();
			res.status(200).json(events);
		  } catch (err) {
			next(err);
		  }
	},

	/** Display details for a specific Client */
	client_detail: async(req, res,next) => {
		res.send('Client detail: ' + req.params.id);
		try {
			const client = await Client.findById(req.params.id);
			res.status(200).json(event);
		  } catch (err) {
			next(err);
		  }
	},

	/** Handle Client create on POST */
	client_create_post: async(_req, res,next) => {
		const newClient = new Client(_req.body)
		try {
			const savedClient = await newClient.save();
			res.status(200).json(savedClient)
		}
		catch (err) {
			next(err)
		}
		res.send('Client Create POST');
	},

	/** Delete Client on GET*/
	client_delete_get: async(_req, res,next) => {
		res.send('Client Delete GET');
		try {
			await Client.findByIdAndDelete(req.params.id);
			res.status(200).json("Client has been deleted.");
		  } catch (err) {
			next(err);
		  }
		},

	/** Handle Client delete on POST */
	client_delete_post: async(_req, res,next) => {
		res.send('Client Delete POST');
		try {
			await Client.findByIdAndDelete(req.params.id);
			res.status(200).json("Client has been deleted.");
		  } catch (err) {
			next(err);
		  }
	},

	/** Display Client update form on GET */
	client_update_get: async(_req, res, next) => {
		res.send('Client Update GET');
		try {
			const updatedEvent = await Client.findByIdAndUpdate(
			  req.params.id,
			  { $set: req.body },
			  { new: true }
			);
			res.status(200).json(updatedClient);
		  } catch (err) {
			next(err);
		  }
	},

	/** Handle Client update on POST */
	client_update_post: async(_req, res, next) => {
		res.send('Client Update POST');
		try {
			const updatedClient = await Client.findByIdAndUpdate(
			  req.params.id,
			  { $set: req.body },
			  { new: true }
			);
			res.status(200).json(updatedClient);
		  } catch (err) {
			next(err);
		  }
	}
};