const userCtrl = require('app/services/UserService.js');



const methodPrefix = "=> ";
const messagePrefix = "-- ";

describe("UserService", () => {
    // Method UT

    let password = userCtrl.passwordValidator();

    describe(methodPrefix + "Password Validator", () => {
        // Test case - duplicate this for multiple tests
      it(messagePrefix + "Password is ok", next => {
          expect(password).toBeTruthy();
          next();
      });
      it(messagePrefix + "Password is not long enought", next => {
          expect(password).toBeFalsy();
          next();  
      });
      it(messagePrefix + "Password has no capitalcase character", next => {
          expect(password).toBeFalsy();
          next();
      });
      it(messagePrefix + "Password has no number", next => {
          expect(password).toBeFalsy();
          next();
      });
      it(messagePrefix + "Password has no lowercase character", next => {
          expect(password).toBeFalsy();
          next();
      });
      it(messagePrefix + "Password has no special character", next => {
          expect(password).toBeFalsy();
          next();
      });
  });
  

});
