const UserController = require ('../controllers/UserController')
const UserServiceSpec = require ('../../spec/UserServiceSpec')

class UserService {
    emailValidator(mailteste){
        let reg = new RegExp('^[A-Za-z0-9]+(!?#$)');

        if(reg.test(mailteste))
        {
            return(true);
        }
        else
        {
            return(false);
        }
    }

    passwordValidator(passwordtest) {
        let passwordverify = htmlentities(passwordtest)
    }

    confirmPasswordValidator(password, confirmpassword) {
        if (password === confirmpassword){
            return (true);
        }else {
            return (false);
        }
    }
}