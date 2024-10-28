/// <reference types="cypress" />

import Footer from "../../src/scenes/footer/index";
import { mount } from "cypress/react";
import React from "react";

describe("Footer Component Tests", () => {
  beforeEach(() => {
    // Assuming you're using a local server or similar to render the Footer
    cy.viewport(1280, 800);
    mount(<Footer />); // Make sure your test environment supports component testing with Cypress
  });

  it("displays the logo", () => {
    cy.get("img[alt='logo']").should("be.visible"); // Check if the logo is visible
  });

  it("displays the commitment message", () => {
    cy.contains(
      "At Megan's Gym, we are committed to helping you meet your fitness goals.",
    ).should("be.visible");
  });

  it("displays the copyright message", () => {
    cy.contains("© Megan's Gym. All Rights Reserved.").should("be.visible");
  });

  it("contains quick links with correct texts", () => {
    const quickLinks = [
      "Home",
      "Benefits",
      "Our Classes",
      "Contact Us",
      "Workouts",
    ];
    quickLinks.forEach((link) => {
      cy.contains(link).should("be.visible");
    });
  });

  it("displays the 'Reach Us' section", () => {
    cy.contains("Reach Us").should("be.visible");
  });

  it("displays the address and checks its link", () => {
    cy.contains("221b Baker St, Marylebone, London NW1 6XE")
      .should("be.visible")
      .should(
        "have.attr",
        "href",
        "https://maps.google.com/?q=221b+Baker+St,+Marylebone,+London+NW1+6XE",
      );
  });

  it("displays the phone number and checks its link", () => {
    cy.contains("020 7224 3688")
      .should("be.visible")
      .should("have.attr", "href", "tel:02072243688");
  });
});
