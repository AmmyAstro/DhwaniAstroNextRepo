export const localStorageHelper = {
  setItem(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      // console.error("Error setting localStorage", error);
    }
  },

  getItem(key) {
    if (typeof window === "undefined") return null;
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      // console.error("Error getting localStorage", error);
      return null;
    }
  },

  removeItem(key) {
    if (typeof window === "undefined") return;
    try {
      localStorage.removeItem(key);
    } catch (error) {
      // console.error("Error removing localStorage", error);
    }
  },

  clear() {
    if (typeof window === "undefined") return;
    try {
      localStorage.clear();
    } catch (error) {
      // console.error("Error clearing localStorage", error);
    }
  },

  // ✅ Set Basic Auth Credentials
  setAuthCredentials(id, password) {
    const credentials = btoa(`${id}:${password}`); // base64 encode
    this.setItem("authCredentials", credentials);
  },

  // ✅ Get Basic Auth Header
  getAuthHeader() {
    const credentials = this.getItem("authCredentials");
    if (!credentials) return null;
    return `Basic ${credentials}`;
  },

  // ✅ Clear Auth
  clearAuthCredentials() {
    this.removeItem("authCredentials");
  }
};
