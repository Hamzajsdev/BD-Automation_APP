import React, { createContext, useContext } from 'react'
import theme from '../common/Theme'


const ThemeContent = createContext()
const ThemeProvider = ({ children }) => {
    return (
        <ThemeContent.Provider value={theme}>
            {children}
        </ThemeContent.Provider>
    )
}

export const useTheme = () => {
    return useContext(ThemeContent);
};

export default ThemeProvider