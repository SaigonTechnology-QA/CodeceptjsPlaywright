module.exports = {
    constantMsg: {
        PANEL_HEADER: 'Profile page',
        DASHBOARD: 'Dashboard',
    },
    pageLogin: {
        username: { xpath: '//input[@name="username"]' },
        password: '//input[@type="password"]',
        loginBtn: { css: 'button.orangehrm-login-button' },
    },

    pageDashboard: {
        assignLeave: "//span[contains(text(),'Assign Leave')]",

        title(actionContent) {
            return `//span[contains(@title,"${actionContent}")]`
        },
        baseItem(action) {
            return this.title(action) + this.item
        },
    }
}