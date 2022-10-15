const mongoose = require('mongoose');

let ClientSchema = new mongoose.Schema(
	{
		_id: mongoose.Schema.Types.ObjectId,
		name: {
			type: String,
			required: true
		},
		age: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Organization',
			required: true
		},
		location: {
			type: String,
			required: true
		}
	}
);

module.exports = mongoose.model('Client', ClientSchema);