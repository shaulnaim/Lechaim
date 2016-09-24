import { LechaimPage } from './app.po';

describe('lechaim App', function() {
  let page: LechaimPage;

  beforeEach(() => {
    page = new LechaimPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
