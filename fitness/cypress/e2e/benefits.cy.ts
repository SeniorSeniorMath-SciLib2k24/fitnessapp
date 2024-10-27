/// <reference types="cypress" />

describe("Homepage E2E Tests", () => {
  beforeEach(() => {
    cy.viewport(1280, 800); // desktop view
    cy.visit("https://fitness-app-ery.pages.dev/#benefits");
  });

  it("should load the benefits page and display the main sections", () => {
    cy.get("section#benefits").should("be.visible");
    cy.contains("MORE THAN JUST WORKOUTS.").should("be.visible");
    cy.contains(
      "Our workout plan can provide a total lifestyle revamp. Don't worry about your enemies - they'll be so impressed by your muscles that they'll bow to your feet. You'll live so long it'll just be you and the stars someday. Your brain will grow three sizes and so will your heart - like the Grinch!",
    ).should("be.visible");
    cy.get('img[alt="forbes-sponsor"]').should("be.visible");
    cy.get('img[alt="fortune-sponsor"]').should("be.visible");
    cy.get('img[alt="redbull-sponsor"]').should("be.visible");
  });

  //   it('should navigate to Contact Us on "Join Now" and "Learn More" button clicks and apply active styling', () => {
  //     cy.contains("Join Now").should("be.visible").click();
  //     cy.get(`a[href="#contactus"]`).should("have.class", "text-primary-500");

  //     cy.visit("https://fitness-app-ery.pages.dev/");
  //     cy.contains("Learn More").should("be.visible").click();
  //     cy.get(`a[href="#contactus"]`).should("have.class", "text-primary-500");
  //   });

  //   it("should not have sponsor images visible for smaller screens", () => {
  //     cy.viewport(375, 667); // mobile view
  //     cy.get('img[alt="forbes-sponsor"]').should("not.exist");
  //     cy.get('img[alt="fortune-sponsor"]').should("not.exist");
  //     cy.get('img[alt="redbull-sponsor"]').should("not.exist");
  //   });

  //   it("should display navbar links and apply active styling on click without URL change", () => {
  //     cy.get("nav > div:first-child").should("be.visible");

  //     cy.contains("Benefits").click();
  //     cy.get(`a[href="#benefits"]`).should("have.class", "text-primary-500");

  //     cy.contains("Our Classes").click();
  //     cy.get(`a[href="#ourclasses"]`).should("have.class", "text-primary-500");

  //     cy.contains("Contact Us").click();
  //     cy.get(`a[href="#contactus"]`).should("have.class", "text-primary-500");

  //     cy.contains("Workouts").click();
  //     cy.get(`a[href="#workouts"]`).should("have.class", "text-primary-500");
  //   });

  //   it("should toggle the mobile menu", () => {
  //     cy.viewport(375, 667);
  //     cy.get(".rounded-full.bg-secondary-500").click();
  //     cy.contains("Home").should("be.visible");
  //     cy.contains("Benefits").should("be.visible");
  //     cy.contains("Our Classes").should("be.visible");
  //     cy.contains("Contact Us").should("be.visible");
  //   });
});
