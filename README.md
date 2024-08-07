# Job Selection and Goodies Distribution Problems

This repository contains two separate projects aimed at solving two different problems:

1. **Job Selection Problem** (JavaScript)
2. **Goodies Distribution Problem** (TypeScript)

## Job Selection Problem

### Purpose

The Job Selection Problem involves selecting a subset of non-overlapping jobs to maximize the profit for John, while calculating the number of remaining jobs and the total earnings left for other employees.

### Structure

- **Language**: JavaScript
- **Framework**: Express.js

### Project Structure

.
├── jobs_selection_problem
│ ├── app.js
│ ├── package.json
│ ├── controllers
│ │ └── jobController.js
│ ├── models
│ │ └── job.js
│ ├── routes
│ │ └── jobRoutes.js
│ ├── services
│ │ └── jobService.js
│ └── utils
│ └── timeUtils.js

### How to Run

1. Navigate to the `jobs_selection_problem` directory:
   ```sh
   cd jobs_selection_problem
    ```
2. Install the dependencies:
   ```sh
   npm install
    ```
3. Start the server:
   ```sh
   npm start
    ```
4. The API will be running at http://localhost:3000. You can test the /api/jobs endpoint using Postman or curl.

## Example API request
```sh
curl -X POST http://localhost:3000/api/jobs -H "Content-Type: application/json" -d '{
  "jobs": [
    { "startTime": "0900", "endTime": "1030", "profit": 100 },
    { "startTime": "1000", "endTime": "1200", "profit": 500 },
    { "startTime": "1100", "endTime": "1200", "profit": 300 }
  ]
}'
```


>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


## Goodies Distribution Problem

### Purpose

The Goodies Distribution Problem involves distributing a set of goodies among employees such that the difference between the highest and lowest priced goodies is minimized.

### Structure

- **Language**: Typescript
- **Framework**: Express.js

### Project Structure

.
├── goodies_distribution_problem
│   ├── src
│   │   ├── app.ts
│   │   ├── controllers
│   │   │   └── goodieController.ts
│   │   ├── models
│   │   │   └── goodie.ts
│   │   ├── routes
│   │   │   └── goodieRoutes.ts
│   │   ├── services
│   │   │   └── goodieService.ts
│   │   ├── utils
│   │   │   └── fileUtils.ts
│   │   └── index.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── tslint.json


### How to Run

1. Navigate to the `goodies_distribution_problem` directory:
   ```sh
   cd goodies_distribution_problem
    ```
2. Install the dependencies:
   ```sh
   npm install
    ```
3. Start the server:
   ```sh
   npm run build
    ```
    ```sh
   npm run dev
    ```
4. The API will be running at http://localhost:4000. You can test the /api/jobs endpoint using Postman or curl.

## Example API request
```sh
curl -X POST http://localhost:3000/api/goodies -H "Content-Type: application/json" -d '{
  "numEmployees": 4,
  "goodies": [
    { "name": "Fitbit Plus", "price": 7980 },
    { "name": "IPods", "price": 22349 },
    { "name": "MI Band", "price": 999 },
    { "name": "Cult Pass", "price": 2799 },
    { "name": "Macbook Pro", "price": 229900 },
    { "name": "Digital Camera", "price": 11101 },
    { "name": "Alexa", "price": 9999 },
    { "name": "Sandwich Toaster", "price": 2195 },
    { "name": "Microwave Oven", "price": 9800 },
    { "name": "Scale", "price": 4999 }
  ]
}'
```



# Repository Structure
.
├── jobs_selection_problem
│   └── [Job Selection Problem files and folders]
└── goodies_distribution_problem
    └── [Goodies Distribution Problem files and folders]