import { it,expect,describe } from 'vitest'

import { passwordValidator } from "../src/utils/passwordValidator";

describe("passwordValidator", () => {
  it("retourne un booléen et un tableau", () => {
   

    const { isValid, errorsMess } = passwordValidator("");

    expect(typeof isValid).to.equal("boolean");

    expect(Array.isArray(errorsMess)).to.equal(true);
  });

  it("valide la longueur minimale du mot de passe", () => {
    const { isValid, errorsMess } = passwordValidator("passe");
    expect(isValid).to.equal(false);
    expect(errorsMess).contains(
      "Le mot de passe doit comporter au moins 8 caractères"
    );
  });

  it("valide qu'il y est au moins 2 chiffres", () => {
    const { isValid, errorsMess } = passwordValidator("passe1eee");
    expect(isValid).to.equal(false);
    expect(errorsMess).contains(
      "Le mot de passe doit contenir au moins 2 chiffres"
    );
  });


});