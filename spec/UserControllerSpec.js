const request = require("request");

const base_url = "http://localhost:3000/";

const methodPrefix = "=> ";
const messagePrefix = "-- ";

describe("UserController", () => {
    describe(methodPrefix + "Page register", () => {
        it(messagePrefix + "Register is ok", next => {
            let user = {
                email: 'toto@toto.fr',
                password: 'Toto123!',
                passwordConfirm: 'Toto123!'
            }

            request.post({url: base_url + "register", user: user}, function(error, response, body) {
                expect(response.status).toBe(200)
            });

            next()
        });
    });
});
