const UserController = require ('../controllers/UserController');
const UserServiceSpec = require ('../../spec/UserServiceSpec');

class UserService {
    emailValidator(mail){
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(mail);
    }

    passwordValidator(password) {
        let reg = new RegExp('^[A-Za-z0-9!?#$]');
        if(reg.test(password))
        {
            return(true);
        }
        else
        {
            return(false);
        }


        return passwordverify
    }

    confirmPasswordValidator(password, confirmpassword) {
        if (password === confirmpassword){
            return (true);
        }else {
            return (false);
        }
    }
}

module.exports = new UserService();