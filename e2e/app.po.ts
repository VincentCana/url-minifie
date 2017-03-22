import { browser, element, by } from 'protractor';

export class UrlMinifiePage {
  navigateTo() {
    return browser.get('/register');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
