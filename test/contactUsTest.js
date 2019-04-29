beforeEach(function(){
    browser.url('/Contact-Us/contactus.html');
})

describe('Test Contact Us from wedriveruniversity.com', function(){

    beforeEach(function(){
        console.log("Inside the describe block");
    })

    it('should be able to submit a successful submission via contact us form', function(done){
        browser.setValue("[name='first_name']", 'Joe');
        browser.setValue("[name='last_name']", "Blogs");
        browser.setValue("[name='email']", "joe_blogs@mail.com");
        browser.setValue("[name='message']", "How much does product x cost?");
        browser.click("[type='submit']");
    });
    
    it('should not be able to submit a successful submission via contact us form as all fields are required', function(done){
        browser.setValue("[name='first_name']", 'Joe');
        browser.setValue("[name='last_name']", "Blogs");
        browser.setValue("[name='email']", "joe_blogs@mail.com");
        browser.click("[type='submit']");
    })
    it('should not be able to submit a successful submission via contact us form as all fields are quired', function(done){
        browser.setValue("[name='first_name']", 'Sarah');
        browser.setValue("[name='email']", "joe_blogs@mail.com");
        browser.click("[type='submit']");
    })
    it('should not be able to submit a successful submission via contact us form as all fields are quired', function(done){
        browser.setValue("[name='first_name']", 'Joe');
        browser.setValue("[name='last_name']", "Blogs");
        browser.click("[type='submit']");
    })
})