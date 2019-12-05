import { AusySkillsAppPage } from './app.po';

describe('ausy-skills-app App', function() {
  let page: AusySkillsAppPage;

  beforeEach(() => {
    page = new AusySkillsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
