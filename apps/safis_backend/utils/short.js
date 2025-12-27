function generateShortCode(length = 4) {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_";
  const actualLength = Math.floor(Math.random() * length) + 1; // random length between 1–4
  let shortCode = "";
  for (let i = 0; i < actualLength; i++) {
    shortCode += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return shortCode;
}

export default generateShortCode;
