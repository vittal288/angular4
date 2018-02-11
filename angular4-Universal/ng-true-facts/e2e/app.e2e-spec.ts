import { NgTrueFactsPage } from './app.po';

describe('ng-true-facts App', () => {
  let page: NgTrueFactsPage;

  beforeEach(() => {
    page = new NgTrueFactsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
