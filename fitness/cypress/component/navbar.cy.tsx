/// <reference types="cypress" />

import Navbar from "../../src/scenes/navbar/index";
import { SelectedPage } from "../../src/shared/types";
import { mount } from "cypress/react";
import React from "react";

describe("Navbar Component Tests", () => {
  beforeEach(() => {
    cy.viewport(1280, 800);
    mount(
      <Navbar
        isTopOfPage={true}
        selectedPage={SelectedPage.Home}
        setSelectedPage={cy.stub()}
      />,
    );
  });

  it("should render the navbar links correctly", () => {
    const links = ["Home", "Benefits", "Our Classes", "Contact Us", "Workouts"];
    links.forEach((link) => {
      cy.contains(link).should("be.visible");
    });
  });

  it("should toggle the mobile menu", () => {
    cy.viewport(375, 667);
    cy.get(".rounded-full.bg-secondary-500").click(); // Click the mobile menu button
    cy.contains("Home").should("be.visible");
    cy.contains("Benefits").should("be.visible");
    cy.contains("Our Classes").should("be.visible");
    cy.contains("Contact Us").should("be.visible");
  });

  it("should close the mobile menu when clicked again", () => {
    cy.viewport(375, 667);
    cy.get(".rounded-full.bg-secondary-500").click();
    cy.contains("Home").should("be.visible");

    cy.get(".rounded-full.bg-secondary-500").click();
    cy.contains("Home").should("not.exist");
  });
});
