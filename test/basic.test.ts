import { it,expect,describe } from 'vitest'

import { passwordValidator } from "../src/utils/passwordValidator";

describe("passwordValidator", () => {
  it("retourne un booléen et un tableau", () => {
   

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

  it("valide qu'il y est au moins 2 chiffres", () => {
    const { isValid, errors } = passwordValidator("passe1");
    expect(isValid).to.equal(false);
    expect(errors).contains(
      "Le mot de passe doit comporter au moins 2 chiffres"
    );
  });


});