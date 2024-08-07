const { convertToMinutes } = require('../utils/timeUtils');

exports.getJobDetails = (jobs) => {
    // Converting job times to minutes for easier comparison
    jobs.forEach(job => {
        job.startTime = convertToMinutes(job.startTime);
        job.endTime = convertToMinutes(job.endTime);
    });

    // Sorting jobs by end time
    jobs.sort((a, b) => a.endTime - b.endTime);

    const selectedJobs = [];
    let lastEndTime = 0;

    jobs.forEach(job => {
        if (job.startTime >= lastEndTime) {
            selectedJobs.push(job);
            lastEndTime = job.endTime;
        }
    });

    const otherJobs = jobs.filter(job => !selectedJobs.includes(job));
    const totalEarnings = otherJobs.reduce((acc, job) => acc + job.profit, 0);

    return {
        task: otherJobs.length,
        earnings: totalEarnings
    };
};
