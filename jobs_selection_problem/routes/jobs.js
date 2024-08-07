var express = require('express');
var router = express.Router();
var jobController = require('../controllers/jobController');

router.post('/jobs', jobController.getJobDetails);

module.exports = router;
