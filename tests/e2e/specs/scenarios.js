"use strict";

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe("sn.infiniteScroll", function() {

    var scrollTo = function scrollTo (y) {
        return "document.querySelector('.infinite-scroll').scrollTop =" + y;
    };

    beforeEach(function() {
        browser.get("http://127.0.0.1:8000/");
        browser.waitForAngular();
        browser.driver.sleep(1000);
    });

    it("should load more pages on scroll to bottom of list (8 items total)", function() {

        // confirm initial state
        expect(element.all(by.repeater("user in users")).count()).toEqual(4);

        // 2nd page
        browser.executeScript(scrollTo(2000));
        browser.driver.sleep(1000);

        expect(element.all(by.repeater("user in users")).count()).toEqual(8);
    });

    it("should load more pages on scroll to bottom of list (12 items total)", function() {

        // 3rd page
        browser.executeScript(scrollTo(2000));
        browser.executeScript(scrollTo(4000));
        browser.driver.sleep(1000);

        expect(element.all(by.repeater("user in users")).count()).toEqual(12);

    });

    it("should NOT load more pages on scroll to bottom of list", function() {

        // 4th page - shouldn't exist
        browser.executeScript(scrollTo(2000));
        browser.executeScript(scrollTo(4000));
        browser.executeScript(scrollTo(6000));
        browser.driver.sleep(1000);

        expect(element.all(by.repeater("user in users")).count()).toEqual(12);
    });

});
