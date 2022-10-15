const Response = require('../models/Response.js');

module.exports = {
	/** Display list of all Responses */
	response_list: async(_req, res, next) => {
		try {
			const responses = await Response.find();
			res.status(200).json(events);
		  } catch (err) {
			next(err);
		  }
	},

	/** Display details for a specific Response */
	response_detail: async(req, res,next) => {
		res.send('Response detail: ' + req.params.id);
		try {
			const response = await Response.findById(req.params.id);
			res.status(200).json(response);
		  } catch (err) {
			next(err);
		  }
	},

	/** Display Response create form on GET */
	response_create_get: async(_req, res, next) => {
	},

	/** Handle Response create on POST */
	response_create_post: async(_req, res,next) => {
		const newResponse = new Response(_req.body)
		try {
			const savedResponse = await newResponse.save();
			res.status(200).json(savedResponse)
		}
		catch (err) {
			next(err)
		}
		res.send('Response Create POST');
	},

	/** Display Response delete form on GET */
	response_delete_get: async(_req, res,next) => {
		res.send('Response Delete GET');
		try {
			await Response.findByIdAndDelete(req.params.id);
			res.status(200).json("Response has been deleted.");
		  } catch (err) {
			next(err);
		  }
		},

	/** Handle Response delete on POST */
	response_delete_post: async(_req, res,next) => {
		res.send('Response Delete POST');
		try {
			await Response.findByIdAndDelete(req.params.id);
			res.status(200).json("Response has been deleted.");
		  } catch (err) {
			next(err);
		  }
	},

	/** Display Response update form on GET */
	response_update_get: async(_req, res, next) => {
		res.send('Response Update GET');
		try {
			const updatedResponse = await Response.findByIdAndUpdate(
			  req.params.id,
			  { $set: req.body },
			  { new: true }
			);
			res.status(200).json(updatedResponse);
		  } catch (err) {
			next(err);
		  }
	},

	/** Handle Response update on POST */
	response_update_post: async(_req, res, next) => {
		res.send('Response Update POST');
		try {
			const updatedResponse = await Response.findByIdAndUpdate(
			  req.params.id,
			  { $set: req.body },
			  { new: true }
			);
			res.status(200).json(updatedResponse)
		  } catch (err) {
			next(err);
		  }
	}
};