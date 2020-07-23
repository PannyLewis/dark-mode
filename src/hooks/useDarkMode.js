import { useLocalStorage } from "../hooks/useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = (key, initialValue) => {
  const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);

  useEffect(() => {
    if (darkMode === true) {
      document.body.classList.add("dark-mode");
    } else if (darkMode === false) {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return [darkMode, setDarkMode];
};
