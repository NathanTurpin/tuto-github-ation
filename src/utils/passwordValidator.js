export function passwordValidator(password) {
  const errorsMess = [];

  if (password.length < 8) {
    errorsMess.push("Le mot de passe doit comporter au moins 8 caractères");
  }

  if (password.replace(/\D/g, "").length < 2) {
    errorsMess.push("Le mot de passe doit contenir au moins 2 chiffres");
  }

  if (!/[A-Z]/.test(password)) {
    errorsMess.push(
      "Le mot de passe doit contenir au moins une lettre majuscule"
    );
  }

  return {
    isValid: errorsMess.length === 0,
    errorsMess,
  };
}
