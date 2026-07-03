import React, { createContext, useState,children } from 'react'


export const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
  const [theme,setTheme] = useState('light');
  const ChangeTheme = ()=>{
   setTheme((prev)=>(prev === 'light'?'dark':"light"))
  }
  return (
    <ThemeContext.Provider value={{theme,ChangeTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
