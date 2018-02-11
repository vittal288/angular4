import { Anguarl4IntegrationTestingPage } from './app.po';

describe('anguarl4-integration-testing App', () => {
  let page: Anguarl4IntegrationTestingPage;

  beforeEach(() => {
    page = new Anguarl4IntegrationTestingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
