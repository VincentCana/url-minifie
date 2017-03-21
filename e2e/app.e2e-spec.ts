import { UrlMinifiePage } from './app.po';

describe('url-minifie App', function() {
  let page: UrlMinifiePage;

  beforeEach(() => {
    page = new UrlMinifiePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
