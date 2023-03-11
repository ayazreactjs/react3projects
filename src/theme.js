import { createContext, useState } from 'react'

export const ThemeContext = createContext()
export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false)
  const toggleTheme = () => {
    setDark(!dark)
  }
  const theme = {
    backgroundColor: dark ? '#36454f' : '#e9dcc9',
    color: dark ? '#e9dcc9' : '#36454f',
    spanColor: dark ? '#99ff99' : '#ff33ff',
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
