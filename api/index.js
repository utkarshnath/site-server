let express = require('express');
let registerRouter = require('./register');

let router = express.Router();

router.use('/registrations',registerRouter);

module.exports = router;
