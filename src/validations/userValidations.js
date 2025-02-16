async function validateEmail(email) {
  if (!email || email.length == 0) {
    return { valid: false, error: "O email é obrigatório" };
  } else {
    return { valid: true, error: "" };
  }
}

function validatePassword(password) {
  if (!password || password.length == 0) {
    return { valid: false, error: "A senha é obrigatória" };
  } else {
    return { valid: true, error: "" };
  }
}

function validateFirstName(firstName) {
  if (!firstName || firstName.length == 0) {
    return { valid: false, error: "O primeiro nome é obrigatório" };
  } else {
    return { valid: true, error: "" };
  }
}

function validateLastName(lastName) {
  if (!lastName || lastName.length == 0) {
    return { valid: false, error: "O último nome é obrigatório" };
  } else {
    return { valid: true, error: "" };
  }
}

module.exports = {
  validateEmail,
  validatePassword,
  validateFirstName,
  validateLastName,
};
