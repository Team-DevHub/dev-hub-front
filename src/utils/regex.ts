export const FormRegex = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  passwordType: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*_+]).{3,}$/,
  passwordLength: /.{8,}/,
};
