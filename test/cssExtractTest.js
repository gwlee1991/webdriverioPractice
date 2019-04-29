describe('The Webdriveruniversity homepage', function(){
    it('should output the height of the homepage carousel', function(done){
        browser.url('/');
        browser.pause(2000);
        const divCarouselHeight = browser.getCssProperty('#udemy-promo-thumbnail', 'height');
        console.log(divCarouselHeight);
    })
})