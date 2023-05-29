import { createContext, useContext, useState } from "react";

//based on Web Dev Simplified video
//https://www.youtube.com/watch?v=5LrDIWkK_Bc&ab_channel=WebDevSimplified

const ThemeContext = createContext("light");
const ThemeUpdateContext = createContext(() => {});

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    if (theme == "light") setTheme("dark");
    else setTheme("light");
  }

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
