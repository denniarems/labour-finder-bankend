const express = require('express');
const LabourData = require('../model/LabourData');
const Rdata = require('../model/RequestedData');
const adminRouter = express.Router();
const bodyparser = require('body-parser');
const cors = require('cors');
adminRouter.use(cors());
adminRouter.use(bodyparser.urlencoded({ extended: false }));
adminRouter.use(bodyparser.json());
router = () => {
	adminRouter.get('/hire', (req, res) => {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
		LabourData.find().then((labours) => {
			res.send(labours);
		});
	});
	adminRouter.post('/add', (req, res) => {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
		const labour = {
			fName    : req.body.labour.fName,
			lName    : req.body.labour.lName,
			age      : req.body.labour.age,
			gender   : req.body.labour.gender,
			address1 : req.body.labour.address1,
			address2 : req.body.labour.address2,
			district : req.body.labour.district,
			job      : req.body.labour.job,
			mobile   : req.body.labour.mobile,
			addar    : req.body.labour.addar
		};
		const alabour = new LabourData(labour);
		// console.log(labours);
		alabour.save();
	});
	adminRouter.route('/deleteRdata/:id').get((req, res) => {
		Rdata.findByIdAndRemove({ _id: req.params.id }, (err, labour) => {
			if (err) res.json(err);
			else res.json('Removed successfully');
		});
	});
	adminRouter.route('/deleteLdata/:id').get((req, res) => {
		LabourData.findByIdAndRemove({ _id: req.params.id }, (err, labour) => {
			if (err) res.json(err);
			else res.json('Removed successfully');
		});
	});
	adminRouter.route('/update').post((req, res) => {
		console.log('inside update');
		labourId = req.body._id;
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
		console.log(req.body.fName);

		LabourData.findById(labourId, {
			$set : {
				fName    : req.body.fName,
				lName    : req.body.lName,
				age      : req.body.age,
				gender   : req.body.gender,
				address1 : req.body.address1,
				address2 : req.body.address2,
				district : req.body.district,
				job      : req.body.job,
				mobile   : req.body.mobile,
				addar    : req.body.addar
			}
		});
	});

	return adminRouter;
};
module.exports = router;
