const UserEntity = require('../models/UserEntity')

class UserService {
    emailValidator(mail) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(mail);
    }

    passwordValidator (password) {
        let RegExp = /(?=.{5,})(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!#?$])/;
        if (RegExp.test(password)) {
            return true;
        }
        else {
            return false;
        }

    }

    confirmPasswordValidator(password, confirmpassword) {
        if (password !== undefined && password !== '') {
            if (password === confirmpassword) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    userRegister( mail, password) {
        let user = new UserEntity({email: mail, password: password});
        user.save(function (err) {
            if (err) { return handleError(err) }
            console.log('user saved!');
        });


    }
}

module.exports = new UserService();