import { UrlMinifiePage } from './app.po';
import {by, element} from "protractor";
import {RegisterPage} from "./RegisterPage";

describe('url-minifie App', function() {
  let page: RegisterPage;

  beforeEach(() => {
    page = new RegisterPage();
  });


  it('must show an confirm password error', () => {
    page.navigateTo();
    page.email.sendKeys('test@protractor.com');
    page.password.sendKeys('password');
    page.confirmPassword.sendKeys('fdssdf');
    page.submitButton.click();
    expect(page.errorMessage.getText()).toEqual('confirm Password Error');
  });

});
