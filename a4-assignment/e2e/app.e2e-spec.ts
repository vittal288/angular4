import { AssignmentsPage } from './app.po';

describe('assignments App', () => {
  let page: AssignmentsPage;

  beforeEach(() => {
    page = new AssignmentsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
