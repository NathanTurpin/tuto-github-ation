export function passwordValidator(password) {
  const errors = [];
  if (password.length < 8) {
    errors.push("Le mot de passe doit comporter au moins 8 caractères");
  }
  console.log(password, errors);

  return {
    isValid: errors.length === 0,
    errors,
  };
}
