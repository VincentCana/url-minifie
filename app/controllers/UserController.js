const UserService = require('../services/UserService');

class UserController {
    register(req, res) {
        let post = req.body;
        let mail = UserService.emailValidator(post.email);
        let password = UserService.passwordValidator(post.password);
        let confirmPassword = UserService.confirmPasswordValidator(post.confirmPassword);

        if(mail && password && confirmPassword){
            let userRegister = UserService.userRegister(post.email, post.password);
            
        }

        res.send({
            mail: mail,
            password: password,
            confirmPassword: confirmPassword
        });
    }



    connect(req, res) {
        res.send('coucou')
    }

}
module.exports = new UserController();
