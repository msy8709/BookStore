import React from 'react';
import Home from './pages/Home';
import Layout from './components/Layout.tsx/Layout';
import { GlobalStyle } from './style/global';
import { ThemeProvider } from 'styled-components';
import { light } from './style/theme';
function App() {
  return (
    <>
    <ThemeProvider theme = {light}>
        <GlobalStyle themeName='light'/>
        <Layout children={<Home/>} />
    </ThemeProvider>
      
    </>
  )
}

export default App;
