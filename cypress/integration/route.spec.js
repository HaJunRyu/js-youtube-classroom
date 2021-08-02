describe('Link 컴포넌트를 클릭했을때 url이 변경되는지 테스트합니다.', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234/');
  });

  it('Does not do much!', () => {
    cy.contains('본 영상').click();

    cy.url().should('include', '/watched');
  });
});
