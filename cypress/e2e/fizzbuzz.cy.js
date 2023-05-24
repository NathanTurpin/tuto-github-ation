import { passwordValidator } from "../../src/utils/passwordValidator";

describe("passwordValidator", () => {
  it("retourne un booléen et un tableau", () => {
    cy.visit("http://localhost:5173/");

    const { isValid, errors } = passwordValidator("");

    expect(typeof isValid).to.equal("boolean");

    expect(Array.isArray(errors)).to.equal(true);
  });

  it("valide la longueur minimale du mot de passe", () => {
    const { isValid, errors } = passwordValidator("passe");
    expect(isValid).to.equal(false);
    expect(errors).contains(
      "Le mot de passe doit comporter au moins 8 caractères"
    );
  });
});
