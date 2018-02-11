import { NgComponentsPage } from './app.po';

describe('ng-components App', () => {
  let page: NgComponentsPage;

  beforeEach(() => {
    page = new NgComponentsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
