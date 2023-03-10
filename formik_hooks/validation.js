// for login page

export default function login_validate(values) {
  const errors = {};

  //email validation
  if (!values.email) {
    errors.email = 'Required!';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  //   password validation
  if (!values.password) {
    errors.password = 'Required!';
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = 'Must be greater than 8-20 characters';
  } else if (values.password.includes(' ')) {
    errors.password = 'No blank spaces';
  }

  return errors;
}

// for registration page

export function signup_validate(values) {
  const errors = {};

  //email validation
  if (!values.email) {
    errors.email = 'Required!';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  //password validation
  if (!values.password) {
    errors.password = 'Required!';
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = 'Must be greater than 8-20 characters';
  } else if (values.password.includes(' ')) {
    errors.password = 'No blank spaces!';
  }

  //confirm password validation
  if (!values.confirmpassword) {
    errors.confirmpassword = 'Required!';
  } else if (values.confirmpassword != values.password) {
    errors.confirmpassword = "password did't matched!";
  } else if (values.password.includes(' ')) {
    errors.password = 'No blank spaces!';
  }

  return errors;
}
