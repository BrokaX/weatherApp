export  function setLocalStorage(key, data) {
  try {
      localStorage.clear();

    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Error setting data to local storage:', error);
  }
}
export function addToLocalStorage(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Error setting data to local storage:', error);
  }
}
export  function getLocalStorage() {
  try {
    const data = localStorage.getItem(localStorage.key(0));
    return JSON.parse(data);
  } catch (error) {
    console.error('Error getting data from local storage:', error);
  }
}
