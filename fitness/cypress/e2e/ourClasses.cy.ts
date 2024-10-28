describe("Our Classes Page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains("Our Classes").click();
  });

  it("displays the main heading and introductory paragraph correctly", () => {
    cy.contains("h1", "OUR CLASSES").should("be.visible");

    cy.contains(
      "At Megan's Gym, we offer a variety of fitness classes designed for all fitness levels. Whether you're aiming to build strength, increase flexibility, or improve your overall endurance, our expert trainers have a class for you. From high-intensity cardio and strength training to calming yoga and Pilates, our group sessions will keep you motivated and engaged. Join us and be part of a supportive fitness community dedicated to helping you achieve your goals.",
    ).should("be.visible");
  });

  it("should display all classes with correct images and descriptions", () => {
    const classes = [
      {
        name: "Weight Training Classes",
        description:
          "Build strength and muscle mass with our weight training classes. These classes will help you get stronger and leaner.",
        image: "image1.webp",
      },
      {
        name: "Yoga Classes",
        description:
          "Improve your flexibility and strength with our yoga classes. Our yoga classes are suitable for all levels.",
        image: "image2.webp",
      },
      {
        name: "Ab Core Classes",
        description:
          "Get a stronger core with our ab core classes. These classes will help you tone your abs and improve your posture.",
        image: "image3.webp",
      },
      {
        name: "Adventure Classes",
        description:
          "Get out of your comfort zone with our adventure classes. These classes will help you build strength and endurance.",
        image: "image4.webp",
      },
      {
        name: "Fitness Classes",
        description:
          "Improve your overall fitness with our fitness classes. These classes will help you get stronger and leaner.",
        image: "image5.webp",
      },
      {
        name: "Training Classes",
        description:
          "Get stronger and fitter with our training classes. These classes will help you get stronger and leaner.",
        image: "image6.webp",
      },
    ];

    classes.forEach((classItem, index) => {
      cy.get("ul")
        .find("li")
        .eq(index)
        .within(() => {
          cy.get("img")
            .should("have.attr", "src")
            .and("include", classItem.image);
          cy.contains("p.text-2xl", classItem.name).should("exist");
          cy.contains("p.mt-5", classItem.description).should("exist");
        });
    });
  });

  it("should render each image in correct order with alt attributes", () => {
    const classImages = [
      "image1.webp",
      "image2.webp",
      "image3.webp",
      "image4.webp",
      "image5.webp",
      "image6.webp",
    ];

    classImages.forEach((image, index) => {
      cy.get("ul")
        .find("li")
        .eq(index)
        .within(() => {
          cy.get("img").should("have.attr", "src", `/src/assets/${image}`);
        });
    });
  });
});
