describe('Test that the button is clickable once the Ajax loader completes loading', () => {
    it.skip('Should attempt to click the button asap', done => {
        browser.url('/Ajax-Loader/index.html');
        browser.click('#button1');
    })

    // using a fat arrow would bind this to the wrong context and therefore not work.
    it.only('Should attempt to click on the button after timeout', function(done){
        browser.url('/Ajax-Loader/index.html');
        this.timeout(20000)
        browser.pause(7000);
        browser.click('#button1');
    })
})