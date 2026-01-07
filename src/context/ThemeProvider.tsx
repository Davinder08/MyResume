import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactElement,
} from "react";

interface ThemeChildType {
  children: ReactElement;
}

type ThemeType = {
  theme: string;
  toggleTheme: () => void;
};

const ThemingContext = createContext<ThemeType>({
  theme: "light",
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }: ThemeChildType) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemingContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemingContext.Provider>
  );
};

const useTheme = () => useContext<ThemeType>(ThemingContext);

export { ThemeProvider, ThemingContext, useTheme };
