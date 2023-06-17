import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import UserContext, { c_userInfo } from './contexts/UserContext';
import AppContext from './contexts/AppContext';
import AppLayout from './component/AppLayout';
import { Outlet } from 'react-router-dom';
import { Translation, useTranslation } from 'react-i18next';

function App() {

  const [authStatus, setAuthStatus] = useState(true);
  const [showProgress, setShowProgress] = useState(false);
  const [userInfo, setuserInfo] = useState(c_userInfo);
  const [showNavMenu, setShowNavMenu] = useState(true);

  const { i18n } = useTranslation();
  const [lang, setLang] = useState(null);

  // I18N自動從LocalStorage存取
  useEffect(() => {
    if(lang === null) {
      const localLang = localStorage.getItem('lang', lang);
      if(localLang !== null) {
        i18n.changeLanguage(localLang);
      } else {
        i18n.changeLanguage("zh-TW");
      }
    } else {
      i18n.changeLanguage(lang);
      localStorage.setItem('lang', lang);
    }
  }, [lang]);

  const global = {
    showProgress,
    setShowProgress,
    showNavMenu,
    setShowNavMenu,
    lang,
    setLang
  };

  const userContextValue = {
    authStatus,
    setAuthStatus,
    userInfo,
    setuserInfo,
  };

  return (

    <AppContext.Provider value={global}>
      <UserContext.Provider value={userContextValue}>
          <div className="App">
            <AppLayout>
              <Outlet></Outlet>
            </AppLayout>
          </div>
      </UserContext.Provider>
    </AppContext.Provider>
  );
}

export default App;
