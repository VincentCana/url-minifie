const UrlService = require('../app/controllers/UrlController.js');

const methodPrefix = "=> ";
const messagePrefix = "-- ";

describe("UrlService", () => {
    describe(methodPrefix + "addUrl", () => {
        it(messagePrefix + "Correct url", next => {
            let res = UrlService.addUrl("http://blabla.com");
            expect(res).toBeTruthy();
            next();
        });
        it(messagePrefix + "Missing p in http", next => {
            let res = UrlService.addUrl("htt://blabla.com");
            expect(res).toBeFalsy();
            next();
        });
        it(messagePrefix + "Missing : in http://", next => {
            let res = UrlService.addUrl("http//blabla.com");
            expect(res).toBeFalsy();
            next();
        });
        it(messagePrefix + "Missing // in http://", next => {
            let res = UrlService.addUrl("http:blabla.com");
            expect(res).toBeFalsy();
            next();
        });
        it(messagePrefix + "Missing .com", next => {
            let res = UrlService.addUrl("http://blabla");
            expect(res).toBeFalse();
            next();
        });
        it(messagePrefix + "Url is empty", next => {
            let res = UrlService.addUrl("");
            expect(res).toBeFalse();
            next();
        });
        it(messagePrefix + "Missing http:// and .com", next => {
            let res = UrlService.addUrl("blabla");
            expect(res).toBeFalsy();
            next();
        });
    });

    describe(methodPrefix + "getUrl", () => {
        it(messagePrefix + "http://blabla.com", next => {
            let res = UrlService.addUrl("http://blabla.com");
            expect(res).toBeTruthy();
            next();
        });
    });
});
