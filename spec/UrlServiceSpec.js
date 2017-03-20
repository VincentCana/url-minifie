const UrlService = require('../app/controllers/UrlController.js');

const methodPrefix = "=> ";
const messagePrefix = "-- ";

describe("UrlService", () => {
    describe(methodPrefix + "addUrl", () => {
        it(messagePrefix + "http://blabla.com", next => {
            let res = UrlService.addUrl("http://blabla.com");
            expect(res).toBeTruthy();
            next();
        });
        it(messagePrefix + "htt://blabla.com", next => {
            let res = UrlService.addUrl("htt://blabla.com");
            expect(res).toBeFalsy();
            next();
        });
        it(messagePrefix + "http//blabla.com", next => {
            let res = UrlService.addUrl("http//blabla.com");
            expect(res).toBeFalsy();
            next();
        });
        it(messagePrefix + "http:blabla.com", next => {
            let res = UrlService.addUrl("http:blabla.com");
            expect(res).toBeFalsy();
            next();
        });
        it(messagePrefix + "http://blabla", next => {
            let res = UrlService.addUrl("http://blabla");
            expect(res).toBeFalse();
            next();
        });
        it(messagePrefix + "", next => {
            let res = UrlService.addUrl("");
            expect(res).toBeFalse();
            next();
        });
        it(messagePrefix + "blabla", next => {
            let res = UrlService.addUrl("blabla");
            expect(res).toBeFalsy();
            next();
        });
    });
});
