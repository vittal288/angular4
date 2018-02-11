import { ResuablePage } from './app.po';

describe('resuable App', () => {
  let page: ResuablePage;

  beforeEach(() => {
    page = new ResuablePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
