const Event = require('../models/Client.js');

module.exports = {
	/** Display list of all Events */
	client_list: async(_req, res, next) => {
		try {
			const events = await Event.find();
			res.status(200).json(events);
		  } catch (err) {
			next(err);
		  }
	},

	/** Display details for a specific Event */
	client_detail: async(req, res,next) => {
		res.send('Event detail: ' + req.params.id);
		try {
			const event = await Event.findById(req.params.id);
			res.status(200).json(event);
		  } catch (err) {
			next(err);
		  }
	},

	/** Display Event create form on GET */
	client_create_get: async(_req, res, next) => {
	},

	/** Handle Event create on POST */
	client_create_post: async(_req, res,next) => {
		const newEvent = new Event(_req.body)
		try {
			const savedEvent = await newEvent.save();
			res.status(200).json(savedEvent)
		}
		catch (err) {
			next(err)
		}
		res.send('Event Create POST');
	},

	/** Display Event delete form on GET */
	client_delete_get: async(_req, res,next) => {
		res.send('Event Delete GET');
		try {
			await Event.findByIdAndDelete(req.params.id);
			res.status(200).json("Event has been deleted.");
		  } catch (err) {
			next(err);
		  }
		},

	/** Handle Event delete on POST */
	client_delete_post: async(_req, res,next) => {
		res.send('Event Delete POST');
		try {
			await Event.findByIdAndDelete(req.params.id);
			res.status(200).json("Event has been deleted.");
		  } catch (err) {
			next(err);
		  }
	},

	/** Display Event update form on GET */
	client_update_get: async(_req, res, next) => {
		res.send('Event Update GET');
		try {
			const updatedEvent = await Event.findByIdAndUpdate(
			  req.params.id,
			  { $set: req.body },
			  { new: true }
			);
			res.status(200).json(updatedEvent);
		  } catch (err) {
			next(err);
		  }
	},

	/** Handle Event update on POST */
	client_update_post: async(_req, res, next) => {
		res.send('Event Update POST');
		try {
			const updatedEvent = await Event.findByIdAndUpdate(
			  req.params.id,
			  { $set: req.body },
			  { new: true }
			);
			res.status(200).json(updatedEvent);
		  } catch (err) {
			next(err);
		  }
	}
};