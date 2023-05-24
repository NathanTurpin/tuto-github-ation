// import { passwordValidator } from "@/utils/passwordValidator";

describe("passwordValidator", () => {
  it("retourne un booléen et un tableau", () => {
    const { isValid, errors } = passwordValidator("");
    expect(typeof isValid).toBe("boolean");
    expect(Array.isArray(errors)).toBe(true);
  });

  it("valide la longueur minimale du mot de passe", () => {
    const { isValid, errors } = passwordValidator("passe");
    expect(isValid).toBe(false);
    expect(errors).toContain(
      "Le mot de passe doit comporter au moins 8 caractères"
    );
  });
});

describe("Inscription", function () {
  it("affiche les erreurs de validation du mot de passe", function () {
    cy.visit("http://localhost:5173");

    // saisi un mot de passe qui ne respecte pas les règles de validation
    cy.get("#password").type("passe");
    cy.get("#submit").click();

    // vérifie que les messages d'erreur corrects sont affichés
    cy.contains("Le mot de passe doit comporter au moins 8 caractères").should(
      "be.visible"
    );
    cy.contains("Le mot de passe doit contenir au moins 2 chiffres").should(
      "be.visible"
    );
    cy.contains(
      "Le mot de passe doit contenir au moins une lettre majuscule"
    ).should("be.visible");
    cy.contains(
      "Le mot de passe doit contenir au moins un caractère spécial"
    ).should("be.visible");

    // efface le mot de passe
    cy.get("#password").clear();

    // saisi un autre mot de passe qui ne respecte pas les règles de validation
    cy.get("#password").type("Password1");
    cy.get("#submit").click();

    // vérifie que le message d'erreur correct est affiché
    cy.contains(
      "Le mot de passe doit contenir au moins un caractère spécial"
    ).should("be.visible");

    cy.contains("Le mot de passe doit contenir au moins 2 chiffres").should(
      "be.visible"
    );

    cy.get("#password").clear();
  });
});
