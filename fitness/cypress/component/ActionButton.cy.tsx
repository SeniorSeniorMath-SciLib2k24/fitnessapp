/// <reference types="cypress" />

import ActionButton from "../../src/shared/ActionButton";
import { mount } from "cypress/react";
import React from "react";

describe("ActionButton Component Tests", () => {
  let setSelectedPage;
  beforeEach(() => {
    setSelectedPage = cy.stub();
    mount(
      <ActionButton setSelectedPage={setSelectedPage}>Click Me</ActionButton>,
    );
  });

  it("renders the button with correct text", () => {
    cy.contains("Click Me").should("be.visible");
  });

  it("applies correct styles", () => {
    const buttonSelector = "a.rounded-md.bg-secondary-500.px-10.py-2";

    cy.get(buttonSelector).should("exist");
    cy.get(buttonSelector).should("have.class", "bg-secondary-500");
    cy.get(buttonSelector)
      .trigger("mouseover")
      .should("have.class", "hover:bg-primary-500");
  });
});
