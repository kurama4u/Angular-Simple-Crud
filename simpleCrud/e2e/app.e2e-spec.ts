import { SimpleCrudPage } from './app.po';

describe('simple-crud App', () => {
  let page: SimpleCrudPage;

  beforeEach(() => {
    page = new SimpleCrudPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
