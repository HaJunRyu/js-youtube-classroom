describe('모달창을 열어 youtube 영상을 검색합니다.', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234/');
  });

  it('모달창 열어 검색', () => {
    cy.contains('동영상 검색').click();
    cy.get('.modal');

    cy.get('.search-input').type('cypress').should('have.value', 'cypress');
  });
});
