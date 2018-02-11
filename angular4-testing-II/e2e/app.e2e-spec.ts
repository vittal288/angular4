import { UTCPage } from './app.po';

describe('utc App', () => {
  let page: UTCPage;

  beforeEach(() => {
    page = new UTCPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
