import { passwordValidator } from "@/utils/passwordValidator";

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
