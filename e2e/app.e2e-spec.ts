import { SocialNetworkPage } from './app.po';

describe('social-network App', () => {
  let page: SocialNetworkPage;

  beforeEach(() => {
    page = new SocialNetworkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
