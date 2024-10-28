/// <reference types="cypress" />

describe("Navbar E2E Tests", () => {
  beforeEach(() => {
    cy.viewport(1280, 800); // desktop view
    cy.visit("/");
  });

  it("should display navbar links and apply active styling on click without URL change", () => {
    cy.get("nav > div:first-child").should("be.visible");

    cy.contains("Benefits").click();
    cy.get(`a[href="#benefits"]`).should("have.class", "text-primary-500");

    cy.contains("Our Classes").click();
    cy.get(`a[href="#ourclasses"]`).should("have.class", "text-primary-500");

    cy.contains("Contact Us").click();
    cy.get(`a[href="#contactus"]`).should("have.class", "text-primary-500");

    cy.contains("Workouts").click();
    cy.get(`a[href="#workouts"]`).should("have.class", "text-primary-500");
  });

  it("should toggle the mobile menu", () => {
    cy.viewport(375, 667);
    cy.get(".rounded-full.bg-secondary-500").click();
    cy.contains("Home").should("be.visible");
    cy.contains("Benefits").should("be.visible");
    cy.contains("Our Classes").should("be.visible");
    cy.contains("Contact Us").should("be.visible");
  });
});
