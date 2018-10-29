const express = require('express');
const LabourData = require('../model/LabourData');
const Rdata = require('../model/RequestedData');
const adminRouter = express.Router();
router = () => {
	// adminRouter.get('/hire', (req, res) => {
	// 	res.header('Access-Control-Allow-Origin', '*');
	// 	res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
	// 	LabourData.find().then((labours) => {
	// 		res.send(labours);
	// 	});
	// });
	adminRouter.post('/add', (req, res) => {
		// console.log('Server CAlled');
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
		// console.log(req.body);
		const labour = {
			iD       : req.body.labour.Id,
			name     : req.body.labour.name,
			age      : req.body.labour.age,
			gender   : req.body.labour.gender,
			address1 : req.body.labour.address1,
			address1 : req.body.labour.address2,
			job      : req.body.labour.job,
			mobile   : req.body.labour.mobile,
			addarId  : req.body.labour.addarId
		};
		const alabour = new LabourData(labour);
		// console.log(products);
		alabour.save();
	});
	return adminRouter;
};
module.exports = router;
