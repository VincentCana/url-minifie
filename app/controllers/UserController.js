const UserService = require('../services/UserService');

class UserController {
    register(req, res) {
        res.send('coucou register');



    }

    connect(req, res) {
        res.send('yop connect');
    }

    connect(req, res) {
        res.send('coucou')
    }

}
module.exports = new UserController();
