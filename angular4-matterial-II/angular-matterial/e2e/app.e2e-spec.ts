import { AngularMatterialPage } from './app.po';

describe('angular-matterial App', () => {
  let page: AngularMatterialPage;

  beforeEach(() => {
    page = new AngularMatterialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
