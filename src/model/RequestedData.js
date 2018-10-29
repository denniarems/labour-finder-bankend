const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/labourDataB');
const Schema = mongoose.Schema;
let LabourSchema = new Schema({
	fName    : String,
	lName    : String,
	age      : Number,
	gender   : String,
	address1 : String,
	address2 : String,
	district : String,
	job      : String,
	mobile   : Number,
	addar    : Number
});
let RData = mongoose.model('Rdata', LabourSchema);
module.exports = RData;
