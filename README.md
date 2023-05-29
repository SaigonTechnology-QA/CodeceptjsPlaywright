3. Init Node project
npm init -y

6. Install Node packages
npm install assert chai codeceptjs codeceptjs-assert codeceptjs-tesults env-cmd @faker-js/faker jsonpath playwright webdriverio @testomatio/reporter --save
(npm install)

7. Init CodeceptJS project
npx codeceptjs init

8. Initiate BDD
npx codeceptjs gherkin:init

11. Page object
Create folder for page object like: \pages\orangehrm\web\login
npx codeceptjs gpo
=> Login => ./pages/orangehrm/web/login/index.js

18. Custom Helpers
Create folder helper
npx codeceptjs gh
=> web => helper/web_helper.js
Update codecept.conf.js:
    Web: {
      require: './helper/web_helper.js',
    }
npx codeceptjs def .

19. Create folder for features: features\orangehrm\web
Create feature file: login.feature

19. Create folder for step_definitions:p step_definitions\orangehrm\web
Create file step for login: login.js


20. Create config file: \config\orangehrm\web\codecept.conf.js
21. Create env files: \env\orangehrm\.env

22. Create file local_data.js
23. Update codecept.conf.js
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




# This a very simple automation framework to test API, Web and Mobile

# Getting Started

## Setup and run locally

1. Install VSCode, NodeJS, Git

2. Download and install Java JDK 8:
- Create `JAVA_HOME` environment variables
- Add `JAVA_HOME` to Path: `%JAVA_HOME%\bin`

3. Init Node project
- npm init -y

6. Install Node packages (codeceptjs, Puppeteer, ...)
	npm install codeceptjs env-cmd playwright --save

7. Init CodeceptJS project
	npx codeceptjs init


8. Initiate BDD
	npx codeceptjs gherkin:init

10. Create folder for page object like:
	\pages\orangehrm\login
11. Page object
	npx codeceptjs gpo
		index => ./pages/orangehrm/login/index.js
	Update codecept.conf.js
	include: {
      loginPage: './pages/orangehrm/login/index.js',
    },

16. Create folder helper

18. Custom Helpers
	npx codeceptjs gh	=> web => helper/web_helper.js
	Update codecept.conf.js
	Web: {
      require: './helper/web_helper.js',
    },

	npx codeceptjs def .


3.  Download and install Android Studio: [Link download](https://developer.android.com/studio)
- Open Android Studio then install all default components
- Create `ANDROID_HOME` environment variables for the path to : `Android\Sdk`
- Add `%ANDROID_HOME%\tools` to Path
- Add `%ANDROID_HOME%\platform-tools` to Path
- Add `%ANDROID_HOME%\emulator` to Path
- Create and start an emulator

4. Install Appium: `npm install -g appium`
- Start Appium by command: `appium`

5. Launch VSCode and open this project folder

6. Install Node packages: `npm install`

7. Run test cases by the following command:
- API test cases: `npm run api`
- Web test cases: `npm run web`
- Mobile test cases: `npm run mobile`

# Project structure
![Alt text](./assets/Project_Structure.png?raw=true "Project structure")

# Config for cloud reporting
![Alt text](./assets/Report.png?raw=true "Cloud reporting")

# Versioning
Version 1.0

# Author
Thich Nguyen - thich.nguyen@saigontechnology.com

# License

# Acknowledgments