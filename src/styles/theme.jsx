import { createContext } from "react"
import { ThemeProvider as ThemeProviderStyled} from "styled-components"
import { usePersistedState } from "../utils/usePersistedState.jsx"
import light from "./light.js";
import dark from "./dark.js";

export const ThemeContext = createContext({
    theme: dark,
    toggleTheme: () => {}
})

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = usePersistedState("theme", dark);

    function toggleTheme() {
        setTheme(theme === dark ? light : dark);
      }

      return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        <ThemeProviderStyled theme={theme}>
            {children}
        </ThemeProviderStyled>
    </ThemeContext.Provider>
      )
}