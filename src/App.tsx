import React, { useContext, useState } from 'react';
import Home from './pages/Home';
import Layout from './components/Layout.tsx/Layout';
import { GlobalStyle } from './style/global';
import { ThemeProvider } from 'styled-components';
import { ThemeName, getTheme, light } from './style/theme';
import ThemeSwitcher from './components/Header/ThemeSwitcher';
import { BookStoreThemeProvider, ThemeContext } from './context/themeContext';
function App() {

  return (
    <>
    <BookStoreThemeProvider>
      
          <ThemeSwitcher />
          <Layout children={<Home/>} />
    </BookStoreThemeProvider>
    </>
  )
}

export default App;
