var mongoose = require('mongoose');

var bookingSchema = mongoose.Schema({
	species: String,
	hunters: Number, 
	start: Date,
	end: Date,
	lodging: String
})

module.exports = mongoose.model('Booking', bookingSchema);