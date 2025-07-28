import { useEffect, useState } from "react";

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    let currentValue;
    try {
      const storedValue = localStorage.getItem(key);
      currentValue = storedValue !== null ? JSON.parse(storedValue) : defaultValue;
    } catch (error) {
      console.log(error);
      currentValue = defaultValue;
    }
    return currentValue;
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value)); // ✅ Fixed: set both key and value
    } catch (error) {
      console.log(error);
    }
  }, [key, value]);

  return [value, setValue];
}
