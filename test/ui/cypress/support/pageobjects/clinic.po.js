function createNewClinic(clinicName) {
  cy.get("a").contains("Novo").click();
  cy.get('input[formcontrolname="name"]').type(clinicName);
  cy.get("button").contains("Salvar").click();
}

function checkClinicCreated(clinicName) {
  cy.get("a").contains("Novo").should("be.visible");
  cy.get("table").find("tr").should("have.length.at.least", 1);
  cy.get("table").contains(clinicName).should("be.visible");
}

export default { createNewClinic, checkClinicCreated };
