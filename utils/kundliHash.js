import CryptoJS from "crypto-js";

const SECRET_KEY =   process.env.NEXT_PUBLIC_KUNDLI_SECRET || "kundli-secret-key";



console.log("keyyyyyyyyyyyyyyyyyyyyyyyyyy", SECRET_KEY);


export function createKundliHash(formData) {
  try {
    if (!SECRET_KEY) throw new Error("KUNDLI_SECRET missing");

    const stablePayload = {
      day: Number(formData.day),
      month: Number(formData.month),
      year: Number(formData.year),
      hour: Number(formData.hour),
      min: Number(formData.min),
      lat: Number(formData.lat).toFixed(2),
      lon: Number(formData.lon).toFixed(2),
      tzone: Number(formData.tzone),
    };

    const encrypted = CryptoJS.AES.encrypt(
      JSON.stringify(stablePayload),
      SECRET_KEY
    ).toString();

    return encodeURIComponent(encrypted);
  } catch (err) {
    console.error("createKundliHash error:", err);
    return null;
  }
}

export function decodeKundliHash(hash) {
  try {
    if (!SECRET_KEY) throw new Error("KUNDLI_SECRET missing");

    const bytes = CryptoJS.AES.decrypt(
      decodeURIComponent(hash),
      SECRET_KEY
    );

    const decrypted = bytes.toString(CryptoJS.enc.Utf8);
    if (!decrypted) return null;

    return JSON.parse(decrypted);
  } catch (err) {
    console.error("decodeKundliHash error:", err);
    return null;
  }
}
