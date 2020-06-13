const {expect} = require ('chai');
describe('page elements', () => {

    it('should have the right title', () => {
        browser.url('https://likejean.github.io/homework-5/')
        expect(browser.getTitle()).eq('Complex Counter App');
       browser.pause(2000);
    })


    it('the page header should be Counters', () => {

        expect($('//h1[@class=\'header\']').getText()).equal('Counters');
        //browser.pause(2000);
    });
//================================================================================
    it.skip('should DEFAULT COUNTER total count display 0', () => {

        expect($('//div//h3[@class=\'total-count\']').getText()).equal('Total: 0');
        //browser.pause(2000);
    });

    it.skip('should DEFAULT COUNTER name display 1. Default Counter', () => {

        expect($('//div/h3[contains(text(),"1")]').getText()).equal('1. Default Counter');
        //browser.pause(2000);
    });

    it('should check LLF exist and placeholder text "CHANGE STEP OPTIONS?" ', () => {
        const llf = $('//button[@name=\'negative\']');
        let exist = llf.isDisplayed();

        let llfText = llf.getText();
        const actual = "CHANGE STEP OPTIONS?";


        // let llfVal = llf.getValue();
        // const defaultVal = '1';


        expect(exist).equal(true);
        expect(llfText).equal(actual);
        //expect(llfVal).equal(defaultVal);
        //browser.pause(2000);
    });

    it.skip('should DEFAULT COUNTER RESULT FIELD display 0', () => {

        expect($('//span').getText()).equal('0');
        //browser.pause(2000);
    });



    it('should check ULF exist and placeholder text "CHANGE STEP OPTIONS?" ', () => {
        const ulf = $('//button[@name=\'positive\']');
        let exist = ulf.isDisplayed();

        let ulfText = ulf.getText();
        const actual = "CHANGE STEP OPTIONS?";

        expect(exist).equal(true);
        expect(ulfText).equal(actual);

        //browser.pause(2000);
    });

    it.skip('should DEFAULT COUNTER RESULT FIELD display 0', () => {

        expect($('//span').getText()).equal('0');
        //browser.pause(2000);
    });


    it('should EDIT COUNTER TITLE', () => {

        expect($('//label[contains(text(),"Edit")]').getText()).equal('Edit Counter Title:');
        //browser.pause(2000);
    });


})
// + test more to go
