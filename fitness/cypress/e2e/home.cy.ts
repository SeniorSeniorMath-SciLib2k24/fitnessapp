/// <reference types="cypress" />

describe("Homepage E2E Tests", () => {
  beforeEach(() => {
    cy.viewport(1280, 800); // desktop view
    cy.visit("/");
  });

  it("should load the homepage and display the main sections", () => {
    cy.get("section#home").should("be.visible");
    cy.get('img[alt="home=page-text"]').should("be.visible"); // left image
    cy.get('img[alt="home-pageGraphic"]').should("be.visible"); // right image
    cy.contains(
      "Unrivaled Gym. Unparalleled Results. Strength. Wisdom. Muscles.",
    ).should("be.visible");
    cy.contains("Join Now").should("be.visible");
    cy.contains("Learn More").should("be.visible");
    cy.get('img[alt="forbes-sponsor"]').should("be.visible");
    cy.get('img[alt="fortune-sponsor"]').should("be.visible");
    cy.get('img[alt="redbull-sponsor"]').should("be.visible");
  });

  it('should navigate to Contact Us on "Join Now" button clicks and apply active styling', () => {
    cy.contains("Join Now").should("be.visible").click();
    cy.get(`a[href="#contactus"]`).should("have.class", "text-primary-500");
  });

  it('should navigate to Contact Us on "Learn More" button clicks and apply active styling', () => {
    cy.contains("Learn More").should("be.visible").click();
    cy.get(`a[href="#contactus"]`).should("have.class", "text-primary-500");
  });

  it("should not have sponsor images visible for smaller screens", () => {
    cy.viewport(375, 667); // mobile view
    cy.get('img[alt="forbes-sponsor"]').should("not.exist");
    cy.get('img[alt="fortune-sponsor"]').should("not.exist");
    cy.get('img[alt="redbull-sponsor"]').should("not.exist");
  });
});
