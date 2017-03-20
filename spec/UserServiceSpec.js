const UserService = require('../app/services/UserService')

const methodPrefix = "=> ";
const messagePrefix = "-- ";

describe('UserService', () => {
  describe('=> emailValidator', () => {
    it('Should return true', next => {
      let validateResponse = UserService.emailValidator('toto@gg.com')
      expect(validateResponse).toBeTruthy()
      next()
    })
  })

  describe(methodPrefix + "", () => {
      // Test case - duplicate this for multiple tests
      it(messagePrefix + "", next => {
      });
  });
})
