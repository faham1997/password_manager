import crypto from "crypto";

const algorithm = "aes-256-cbc";
export const iv = crypto.randomBytes(16);
export const key = crypto.randomBytes(32);

export const encryptPassword = (password) => {
  let cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(password, "utf8", "base64");
  return (encrypted += cipher.final("base64"));
};

export const decryptPassword = (epassword) => {
  let decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(epassword, "base64", "utf8");
  return (decrypted += decipher.final("utf8"));
};

// const encryptedPassword = encryptPassword("testing");
// console.log(encryptedPassword);
// const passwd = decryptPassword(encryptedPassword);
// console.log(passwd);
