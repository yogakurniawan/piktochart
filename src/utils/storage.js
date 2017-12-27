export const loadItem = (key) => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.log(err);
  }
};

export const saveItem = (key, item) => {
  try {
    const serializedState = JSON.stringify(item);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    console.log(err);
  }
};

export const removeItem = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (err) {
    console.log(err);
  }
};

export const clear = () => {
  try {
    localStorage.clear();
  } catch (err) {
    console.log(err);
  }
};