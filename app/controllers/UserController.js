const UserService = require('../services/UserService');

class UserController {
  register(req, res) {
    // console.log(req.body);
    let post = req.body;
    let password = UserService.passwordValidator(post.password);
    let mail = UserService.emailValidator(post.email);

    let confirmPassword = UserService.confirmPasswordValidator(post.password, post.confirmPassword);


    if (mail && password && confirmPassword) {
      let userRegister = UserService.userRegister(post.email, post.password);

    }

    res.send({
      mail: mail,
      password: password,
      confirmPassword: confirmPassword
    });
  }


  connect(req, res) {
    UserService.userConnect(req.body.email, req.body.password).then((doc) => {
      console.log(doc);
      res.send(doc);
    });
  }

}
module.exports = new UserController();
