import { it,expect,describe } from 'vitest'

import { passwordValidator } from "../src/utils/passwordValidator";

describe('passwordValidator', () => {
  it('retourne une erreur si le mot de passe a moins de 8 caractères', () => {
    const { isValid, errors } = passwordValidator('pass12');

    expect(isValid).toBe(false);
    expect(errors).toContain('Le mot de passe doit comporter au moins 8 caractères');
  });
});