/// <reference types="cypress" />

import HText from "../../src/shared/HText";
import { mount } from "cypress/react";
import React from "react";

describe("HText Component Tests", () => {
  beforeEach(() => {
    mount(<HText>Test Title</HText>);
  });

  it("renders the correct text", () => {
    cy.contains("Test Title").should("be.visible");
  });

  it("applies the correct styles", () => {
    cy.get("h1")
      .should("have.class", "basis-3/5")
      .and("have.class", "font-montserrat")
      .and("have.class", "text-3xl")
      .and("have.class", "font-bold");
  });
});
