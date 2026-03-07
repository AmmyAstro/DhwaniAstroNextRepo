import CryptoJS from 'crypto-js';

const SECRET_KEY = 'your-very-secure-key'; 

export const encryptData = (data) => {
  try {
    const encrypted = CryptoJS.AES.encrypt(
      JSON.stringify(data),
      SECRET_KEY
    ).toString();
    return encodeURIComponent(encrypted);
  } catch (error) {
    // console.error(' failed:', error);
    return null;
  }
};

export const decryptData = (encryptedData) => {
  try {
    const bytes = CryptoJS.AES.decrypt(
      decodeURIComponent(encryptedData),
      SECRET_KEY
    );
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);
    return JSON.parse(decrypted);
  } catch (error) {
    // console.error('Decryption failed:', error);
    return null;
  }
};
