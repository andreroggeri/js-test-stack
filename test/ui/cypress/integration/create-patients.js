/// <reference types="Cypress" />

import faker from "@faker-js/faker";
import { WEB_TARGET_URL } from "../../../support/config";
import * as clinic from "../support/pageobjects/clinic.po";
import * as menu from "../support/pageobjects/menu.po";
describe("Patient creation", () => {
  beforeEach(() => {
    cy.skipLogin();
    cy.visit(WEB_TARGET_URL);
  });

  it("should create a patient", () => {
    // Arranga
    const companyName = faker.company.companyName();
    console.log({ menu });
    menu.goToClinics();

    // Act
    clinic.createNewClinic(companyName);

    // Assert
    clinic.checkClinicCreated(companyName);
  });
});
