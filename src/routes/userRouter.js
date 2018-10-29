const express = require('express');
const LabourData = require('../model/LabourData');
const Rdata = require('../model/RequestedData');
const userRouter = express.Router();
router = () => {
	userRouter.get('/hire', (req, res) => {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
		Rdata.find().then((labours) => {
			res.send(labours);
		});
	});
	userRouter.post('/apply', (req, res) => {
		// console.log('Server CAlled');
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
		// console.log(req.body);
		const labour = {
			fName    : req.body.labour.fName,
			lName    : req.body.labour.lName,
			age      : req.body.labour.age,
			gender   : req.body.labour.gender,
			address1 : req.body.labour.address1,
			address1 : req.body.labour.address2,
			district : req.body.labour.district,
			job      : req.body.labour.job,
			mobile   : req.body.labour.mobile,
			addar    : req.body.labour.addar
		};
		const rlabour = new Rdata(labour);
		// console.log(products);
		rlabour.save();
	});
	return userRouter;
};
module.exports = router;
