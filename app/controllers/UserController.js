const UserService = require('../services/UserService');

class UserController {
    register(req, res) {
        let post = req.body;
        let mail = UserService.emailValidator(post.email);
        let password = UserService.passwordValidator(post.password);
        let confirmPassword = UserService.confirmPasswordValidator(post.confirmPassword)



        res.send({
            mail: mail,
            password: password,
            confirmPassword: confirmPassword
        });



    }

    connect(req, res) {
        res.send('yop connect');
    }

    connect(req, res) {
        res.send('coucou')
    }

}
module.exports = new UserController();
