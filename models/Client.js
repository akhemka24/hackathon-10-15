const mongoose = require('mongoose');

let ClientSchema = new mongoose.Schema(
	{
		_id: mongoose.Schema.Types.ObjectId,
		date: {
			type: Date,
			required: true
		},
		name: {
			type: String,
			required: true
		},
		age: {
			type: String,
			required: true
		},
        generalFeeling: {
            type: String, 
            required: true
        },
        specificFeeling: {
            type: String, 
            required: true
        },
        whyFeelingThis: {
            type: String,
            required: false
        }
	}
);

module.exports = mongoose.model('Client', ClientSchema);