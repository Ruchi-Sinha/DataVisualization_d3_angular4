import { MyAngularProjPage } from './app.po';

describe('my-angular-proj App', () => {
  let page: MyAngularProjPage;

  beforeEach(() => {
    page = new MyAngularProjPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
