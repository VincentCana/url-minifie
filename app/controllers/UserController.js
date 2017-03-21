const UserService = require('../services/UserService');

class UserController {
    register(req, res) {
        res.send('coucou register');



    }

    connect(req, res) {
        res.send('yop connect');
    }

}
module.exports = new UserController();
