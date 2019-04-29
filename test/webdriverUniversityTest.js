describe('webdriveruniversity page check', () => {
    it('Should be able to view contact us', done => {
        browser.setViewportSize({
            width: 1200,
            height: 800
        });
        browser.url('/');
        const title = browser.getTitle();
        expect(title).to.equal('WebDriverUniversity.com');
        browser.click("#contact-us");
        browser.pause(3000);
    })
    
    it("Should check the login button opens the logion portal page", done => {
        browser.url('/');
        browser.click('#login-portal');
        const title = browser.getTitle();
        title.should.equal('WebDriverUniversity.com');
        browser.pause(3000);
    })
})

