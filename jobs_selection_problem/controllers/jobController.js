const jobService = require('../services/jobService');

exports.getJobDetails = (req, res) => {
    const jobs = req.body.jobs;
    if (!Array.isArray(jobs)) {
        return res.status(400).json({ error: 'Invalid input format. Expected an array of jobs.' });
    }

    const result = jobService.getJobDetails(jobs);
    res.json(result);
};