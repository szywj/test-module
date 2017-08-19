import { TestModulePage } from './app.po';

describe('test-module App', () => {
  let page: TestModulePage;

  beforeEach(() => {
    page = new TestModulePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
