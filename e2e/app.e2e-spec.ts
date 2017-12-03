import { MyNgrxPage } from './app.po';

describe('my-ngrx App', () => {
  let page: MyNgrxPage;

  beforeEach(() => {
    page = new MyNgrxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
