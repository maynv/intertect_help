const getStorageKey = (name = "") => {
  return `local-${name}`;
};

export const LocalStorageKeys = {
  UserName: "userName",
  Password: "password"

};

class LocalStorageService {

  keys = LocalStorageKeys;

  setLocalStorageByName = (name, value) => {
    const key = getStorageKey(name);
    const data = JSON.stringify({
      key,
      value
    })
    sessionStorage.setItem(key, data);
  };

  getLocalStorageByName = (name) => {
    let item = sessionStorage.getItem(getStorageKey(name));
    try {
      return item ? JSON.parse(item).value : null;
    } catch {

    }
  };

  removeLocalStorageByName = (name) => {
    sessionStorage.removeItem(getStorageKey(name));
  };

  clearAllLocalStorage = () => {
    sessionStorage.clear();
  }
};

export default new LocalStorageService();

