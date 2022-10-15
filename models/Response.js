const mongoose = require('mongoose');

let ResponseSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true
		},
		description: {
			type: String, 
		},
		url: {
			type: String,
			required: true
		},
		events: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Event'
			}
		]
	}
);

module.exports = mongoose.model('Response', ResponseSchema);