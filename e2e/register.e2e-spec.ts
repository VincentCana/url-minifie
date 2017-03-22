import { UrlMinifiePage } from './app.po';
import {by, element, browser, protractor} from "protractor";
import {RegisterPage} from "./RegisterPage";
import {window} from "rxjs/operator/window";

describe('url-minifie App', function() {
  let page: RegisterPage;

  beforeEach(() => {
    page = new RegisterPage();
  });


  it('must show a confirm password error', () => {
    page.navigateTo();
    page.email.sendKeys('test@protractor.com');
    page.password.sendKeys('password');
    page.confirmPassword.sendKeys('fdssdf');
    page.submitButton.click();
    expect(page.errorMessage.getText()).toEqual('Les deux mots de passe ne sont pas identiques');
  });

  it('must show an empty email error',()=>{
    page.navigateTo();
    page.email.sendKeys('');
    page.password.sendKeys('password');
    page.confirmPassword.sendKeys('fdssdf');
    page.submitButton.click();
    expect(page.errorMessage.getText()).toEqual('Le courriel n\'est pas renseigné');
  });

  it('must show an empty email error',()=>{
    page.navigateTo();
    page.email.sendKeys('test@protractor.fr');
    page.password.sendKeys('');
    page.confirmPassword.sendKeys('fdssdf');
    page.submitButton.click();
    expect(page.errorMessage.getText()).toEqual('Le mot de passe n\'est pas renseigné');
  });

  it('must redirect to dashboard',()=>{
    page.navigateTo();
    page.email.sendKeys('test@protractor.fr');
    page.password.sendKeys('pass');
    page.confirmPassword.sendKeys('pass');
    page.submitButton.click();

    browser.manage().timeouts().pageLoadTimeout(10000);
    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/dashboard');

  });

});
