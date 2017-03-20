const UserService = require('../app/services/UserService.js');

const methodPrefix = "=> ";
const messagePrefix = "-- ";

describe('UserService', () => {
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
})
