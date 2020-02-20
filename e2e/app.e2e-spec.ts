import { BlogFrontendPage } from './app.po';

describe('blog-frontend App', function() {
  let page: BlogFrontendPage;

  beforeEach(() => {
    page = new BlogFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
