# This a very simple automation framework to test Web using CodeceptJS and Playwright

## Setup and run locally

1. Download and install Java JDK 8:
- Create `JAVA_HOME` environment variables
- Add `JAVA_HOME` to Path: `%JAVA_HOME%\bin`

![Alt text](./assets/JavaHome.png?raw=true "JAVA_HOME")

- Check if `JAVA_HOME` is configured properly or not by typing the command `echo %JAVA_HOME%` and `java -version` on terminal/cmd

2. Install VSCode, NodeJS, Git

3. Launch VSCode and open this base project

4. Open terminal and install Node packages by the command: `npm install`

5. Execute the test case by the command: `npm run web`

## Setup for cloud report on testomatio
1. Login to [testomatio](https://testomat.io/), create new project and get API key

![Alt text](./assets/CloudReport_01.png?raw=true "CloudReport_01")

2. Config cloud report for project

![Alt text](./assets/CloudReport.png?raw=true "CloudReport")

3. Execute the test case by the command: `npm run web`


## Setup Local Reportportal
1. Documentation at [Link](https://reportportal.io/docs/installation-steps/DeployWithDockerOnWindows)
2. Tutorial on [Youtube](https://www.youtube.com/watch?v=Wxb4JH7p1B4&ab_channel=ChetanKolhe)
3. Start docker compose: `docker compose up -d`
4. Stop docker compose: `docker compose stop`
5. Shutdown wsl: `wsl --shutdown`


## Project structure
1. Structure

![Alt text](./assets/FWStructure.png?raw=true "FWStructure")


## Run on GitHub Actions
1. Check/update the file `.github/workflows/actions.yml`
2. Commit and push code, the test will be triggered


## Fresh init project
1. Init Node project
npm init -y

2. Install Node packages
npm install assert chai codeceptjs codeceptjs-assert codeceptjs-tesults env-cmd @faker-js/faker jsonpath playwright webdriverio @testomatio/reporter @reportportal/agent-js-codecept --save
(npm install)

3. Init CodeceptJS project
npx codeceptjs init

4. Initiate BDD
npx codeceptjs gherkin:init

5. Page object
Create folder for page object like: \pages\orangehrm\web\login
npx codeceptjs gpo
=> Login => ./pages/orangehrm/web/login/index.js

6. Custom Helpers
Create folder helper
npx codeceptjs gh
=> web => helper/web_helper.js
Update codecept.conf.js:
    Web: {
      require: './helper/web_helper.js',
    }
npx codeceptjs def .

7. Create folder for features: features\orangehrm\web
Create feature file: login.feature

8. Create folder for step_definitions:p step_definitions\orangehrm\web
Create file step for login: login.js


9. Create config file: \config\orangehrm\web\codecept.conf.js
10. Create env files: \env\orangehrm\.env

11. Create file local_data.js
12. Update codecept.conf.js
const path = './'
// const path = './../../../'
require(path + 'local_data')
  gherkin: {
    features: path + './features/**/*.feature',
    steps: path + './step_definitions/**/*.js',
  },

    pauseOnFail: {},
    tesults: {
      enabled: false,
      require: 'codeceptjs-tesults',
      target: process.env.TargetToken,
      },
    testomatio: {
      enabled: false,
      require: '@testomatio/reporter/lib/adapter/codecept',
      apiKey: process.env.TESTOMATIO,
    }


# Versioning
Version 1.0

# Author
Thich Nguyen - thich.nguyen@saigontechnology.com

# License

# Acknowledgments