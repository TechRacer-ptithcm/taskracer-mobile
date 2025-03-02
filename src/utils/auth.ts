export const validateEmail = (email: string): boolean => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  return reg.test(email);
};
export const validatePassword = (password: string): boolean => {
  return password.length >= 6;
};
