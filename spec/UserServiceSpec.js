
const UserService = require('app/services/UserService');


const methodPrefix = "=> ";
const messagePrefix = "-- ";

describe("UserService", () => {
    // Method UT
    describe(methodPrefix + '=> emailValidator', () => {
        it(messagePrefix + 'Should return true', next => {
            let validateResponse = UserService.emailValidator('toto@gg.com')
            expect(validateResponse).toBeTruthy()
            next()
        })

        it(messagePrefix + 'Should return false', next => {
            let validateResponse = UserService.emailValidator('totogg.com')
            expect(validateResponse).toBeFalsy()
            next()
        })

        it(messagePrefix + 'Should return false', next => {
            let validateResponse = UserService.emailValidator('@gg.com')
            expect(validateResponse).toBeFalsy()
            next()
        })

        it(messagePrefix + 'Should return false', next => {
            let validateResponse = UserService.emailValidator('toto@gg.')
            expect(validateResponse).toBeFalsy()
            next()
        })

        it(messagePrefix + 'Should return false', next => {
            let validateResponse = UserService.emailValidator('toto@.com')
            expect(validateResponse).toBeFalsy()
            next()
        })

        it(messagePrefix + 'Should return false', next => {
            let validateResponse = UserService.emailValidator('')
            expect(validateResponse).toBeFalsy()
            next()
        })
    })

    describe(methodPrefix + "Password Validator", () => {
        // Test case - duplicate this for multiple tests
        it(messagePrefix + "Password is ok", next => {
            let password = userCtrl.passwordValidator("!Aze0");
            expect(password).toBeTruthy();
            next();
        });
        it(messagePrefix + "Password has wrong special character", next => {
            let password = userCtrl.passwordValidator("!=empty");
            expect(password).toBeFalsy();
            next();  
        });
        it(messagePrefix + "Password has no capitalcase character", next => {
            let password = userCtrl.passwordValidator("!aze0");
            expect(password).toBeFalsy();
            next();
        });
        it(messagePrefix + "Password has no number", next => {
            let password = userCtrl.passwordValidator("!Azee");
            expect(password).toBeFalsy();
            next();
        });
        it(messagePrefix + "Password has no lowercase character", next => {
            let password = userCtrl.passwordValidator("!AZE0");
            expect(password).toBeFalsy();
            next();
        });
        it(messagePrefix + "Password has no special character", next => {
            let password = userCtrl.passwordValidator("Azert");
            expect(password).toBeFalsy();
            next();
        });
    }); 

    describe(methodPrefix + '=> confirmPasswordValidator', () => {
        it(messagePrefix + 'Should return true', next => {
            let validateResponse = UserService.confirmPasswordValidator('toto', 'toto')
            expect(validateResponse).toBeTruthy()
            next()
        })

        it(messagePrefix + 'Should return false', next => {
            let validateResponse = UserService.confirmPasswordValidator('', '')
            expect(validateResponse).toBeFalsy()
            next()
        })

        it(messagePrefix + 'Should return false', next => {
            let validateResponse = UserService.confirmPasswordValidator('toto', '')
            expect(validateResponse).toBeFalsy()
            next()
        })

        it(messagePrefix + 'Should return false', next => {
            let validateResponse = UserService.confirmPasswordValidator('', 'toto')
            expect(validateResponse).toBeFalsy()
            next()
        })

        it(messagePrefix + 'Should return false', next => {
            let validateResponse = UserService.confirmPasswordValidator('toto', 'azazaz')
            expect(validateResponse).toBeFalsy()
            next()
        })
    })  
});

