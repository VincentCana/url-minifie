import { browser, element, by } from 'protractor';

export class LoginPage {

  email = element(by.id('email'));
  password = element(by.id('password'));
  submitButton = element(by.id('submitButton'));

  errorMessage = element(by.id('errorMessage'));

  navigateTo() {
    return browser.get('/login');
  }
}
