const UrlService = require('../app/controllers/UrlService');

const methodPrefix = "=> ";
const messagePrefix = "-- ";

describe("UrlService", () => {
    describe(methodPrefix + "addUrl", () => {

        it(messagePrefix + "Correct url", next => {
            let res = UrlService.addUrl("http://blabla.com");
            expect(res)
                .toBeTruthy();
            next();
        });
        it(messagePrefix + "Missing p in http", next => {
            let res = UrlService.addUrl("htt://blabla.com");
            expect(res)
                .toBeFalsy();
            next();
        });
        it(messagePrefix + "Missing : in http://", next => {
            let res = UrlService.addUrl("http//blabla.com");
            expect(res)
                .toBeFalsy();
            next();
        });
        it(messagePrefix + "Missing // in http://", next => {
            let res = UrlService.addUrl("http:blabla.com");
            expect(res)
                .toBeFalsy();
            next();
        });
        it(messagePrefix + "Missing .com", next => {
            let res = UrlService.addUrl("http://blabla");
            expect(res)
                .toBeFalsy();
            next();
        });
        it(messagePrefix + "Url is empty", next => {
            let res = UrlService.addUrl("");
            expect(res)
                .toBeFalsy();
            next();
        });
        it(messagePrefix + "Missing http:// and .com", next => {
            let res = UrlService.addUrl("blabla");
            expect(res)
                .toBeFalsy();
            next();
        });
    });

    describe(methodPrefix + "getUrls", () => {
        it(messagePrefix + "http://blabla.com", next => {
            UrlService.getUrls(callback);

            function callback(urls) {
                expect(urls)
                    .toBeDefined();
                expect(urls);
                next();
            }
        });
    });
});
