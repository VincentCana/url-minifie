/**
 * Created by David Salmon on 21/03/2017.
 */
import { browser, element, by } from 'protractor';

export class RegisterPage {

  email = element(by.id('email'));
  password = element(by.id('password'));
  confirmPassword = element(by.id('confirmPassword'));
  submitButton = element(by.id('submitButton'));

  errorMessage = element(by.id('errorMessage'));
  navigateTo() {
    return browser.get('/register');
  }
}
