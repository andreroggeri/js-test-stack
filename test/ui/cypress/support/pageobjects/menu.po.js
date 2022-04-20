function goToClinics() {
  cy.get("button.toggle-sidenav").click();
  cy.get("mat-list-item").contains("Clinicas").click();
}

export default { goToClinics };
