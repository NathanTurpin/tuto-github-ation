export function passwordValidator(password) {
  const errorsMess = [];

  if (password.length < 8) {
    errorsMess.push("Le mot de passe doit comporter au moins 8 caractères");
  }

  return {
    isValid: errorsMess.length === 0,
    errorsMess,
  };
}
