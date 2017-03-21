const UserService = require('../services/UserService');

class UserController {
    register(req, res) {
        res.send('coucou register');
    }

}
module.exports = new UserController();
