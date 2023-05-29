const { I } = inject();
const loginPage = require('../../../pages/orangehrm/web/login')

Given('I open OrangeHRM website', async () => {
  await loginPage.checkLaunchWeb();
});

Given('I login with user and password', async () => {
  await loginPage.inputUserName(process.env.USER_NAME);
  await loginPage.inputPassword(process.env.PASS_WORD);
  await loginPage.clickLogin();
  await loginPage.checkLoginSuccess();
});


Given('I open OrangeHRM website and login with admin user', async () =>{
  await loginPage.checkLaunchWeb();
  await loginPage.inputUserName(process.env.USER_NAME);
  await loginPage.inputPassword(process.env.PASS_WORD);
  await loginPage.clickLogin();
  await loginPage.checkLoginSuccess();
})


Given('I input the Username {string}', async (username) => {
  await loginPage.inputUserName(username);
});

Given('I input the Password {string}', async (password) => {
  await loginPage.inputPassword(password);
});


