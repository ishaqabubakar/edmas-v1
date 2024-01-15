import bcrypt from "bcrypt";

export const hashPassword = async (val: any) => {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(val, salt);
  return hashedPassword;
};

export const comparedPassword = async (
  enteredPassword: any,
  savedPassword: any
) => {
  const decodedPassword = await bcrypt.compare(enteredPassword, savedPassword);
  return decodedPassword;
};
