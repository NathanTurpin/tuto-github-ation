describe("check-password", () => {
  it("should test if password is ok", () => {
    cy.visit("http://localhost:5173");

    cy.get("#password").type("Ae123!");
    cy.get("#submit").click();
    cy.get("#error").contains(
      "Le mot de passe doit comporter au moins 8 caractères"
    );

    cy.get("#password").clear().type("password1");
    cy.get("#submit").click();
    cy.get("#error").contains(
      "Le mot de passe doit contenir au moins 2 chiffres"
    );

    cy.get("#password").clear().type("password12");
    cy.get("#submit").click();
    cy.get("#error").contains(
      "Le mot de passe doit contenir au moins une lettre majuscule"
    );
  });
});
