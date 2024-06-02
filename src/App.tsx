import React, { useContext, useState } from 'react';
import Home from './pages/Home';
import Layout from './components/Layout.tsx/Layout';
import { GlobalStyle } from './style/global';
import { ThemeProvider } from 'styled-components';
import { ThemeName, getTheme, light } from './style/theme';
import ThemeSwitcher from './components/Header/ThemeSwitcher';
import { BookStoreThemeProvider, ThemeContext } from './context/themeContext';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './components/common/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home/></Layout>,
    errorElement: <Error/>
  },
  {
    path: "/books",
    element: <div>도서 목록</div>
  },
  {
    path: "/signup",
    element: <div>회원가입</div>
  }

])
function App() {

  return (
    <>
    <BookStoreThemeProvider>
          <Layout>
            <RouterProvider router={router} />
          </Layout>
    </BookStoreThemeProvider>
    </>
  )
}

export default App;
