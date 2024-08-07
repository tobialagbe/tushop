/**
 * Tushop Job Selection Service
 * 
 * This service provides a method to determine the jobs selected by John to maximize his profit 
 * while ensuring he performs only one job at a time (non-overlapping jobs). 
 * It also calculates the number of remaining jobs and the total earnings left for other employees.
 * 
 * Steps:
 * 1. Convert job times from HHMM format to minutes for easier comparison.
 * 2. I sort jobs by their end times.
 * 3. I use a dynamic programming approach to calculate the maximum profit possible 
 *    by selecting non-overlapping jobs:
 *    - I initialize a dp array to store the maximum profit at each job.
 *    - I initialize a selectedJobs array to keep track of the jobs included in the optimal solution.
 * 4. For each job, I decide whether to include it in the solution by comparing:
 *    - The profit if the job is included (considering the last non-conflicting job).
 *    - The profit if the job is excluded (the maximum profit until the previous job).
 * 5. I reconstruct the list of selected jobs by backtracking through the dp and selectedJobs arrays.
 * 6. I calculate the jobs and earnings left for other employees by filtering out the selected jobs.
 * 
 * The method returns an object containing:
 * - `task`: The number of remaining jobs for other employees.
 * - `earnings`: The total earnings from the remaining jobs for other employees.
 */



const { convertToMinutes } = require('../utils/timeUtils');

exports.getJobDetails = (jobs) => {
    // Convert job times to minutes for easier comparison
    jobs.forEach(job => {
        job.startTime = convertToMinutes(job.startTime);
        job.endTime = convertToMinutes(job.endTime);
    });

    // Sort jobs by end time
    jobs.sort((a, b) => a.endTime - b.endTime);

    const n = jobs.length;
    const dp = Array(n).fill(0);
    const selectedJobs = Array(n).fill(false);

    dp[0] = jobs[0].profit;
    selectedJobs[0] = true;

    for (let i = 1; i < n; i++) {
        let includeProfit = jobs[i].profit;
        let lastNonConflict = -1;

        // Find the latest job that doesn't conflict with jobs[i]
        for (let j = i - 1; j >= 0; j--) {
            if (jobs[j].endTime <= jobs[i].startTime) {
                lastNonConflict = j;
                break;
            }
        }

        if (lastNonConflict != -1) {
            includeProfit += dp[lastNonConflict];
        }

        dp[i] = Math.max(includeProfit, dp[i - 1]);

        if (dp[i] == includeProfit) {
            selectedJobs[i] = true;
        } else {
            selectedJobs[i] = false;
        }
    }

    // Reconstruct the list of selected jobs
    const chosenJobs = [];
    let i = n - 1;
    while (i >= 0) {
        if (selectedJobs[i]) {
            chosenJobs.unshift(jobs[i]);
            i--;
            while (i >= 0 && jobs[i].endTime > chosenJobs[0].startTime) {
                i--;
            }
        } else {
            i--;
        }
    }

    const otherJobs = jobs.filter(job => !chosenJobs.includes(job));
    const totalEarnings = otherJobs.reduce((acc, job) => acc + job.profit, 0);

    return {
        task: otherJobs.length,
        earnings: totalEarnings
    };
};