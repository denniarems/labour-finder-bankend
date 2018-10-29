const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const chalk = require('chalk');

const userRouter = require('./src/routes/userRouter')();
const adminRouter = require('./src/routes/adminRouter')();

const app = new express();

app.use(cors());
app.use(bodyparser.json());

app.use('/user', userRouter);
app.use('/admin', adminRouter);
app.listen(3000, function() {
	console.log('listening to port  ' + chalk.yellow(3000));
});
