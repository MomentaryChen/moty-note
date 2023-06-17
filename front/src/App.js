import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import UserContext, { c_userInfo } from './contexts/UserContext';
import AppContext from './contexts/AppContext';
import AppLayout from './component/AppLayout';
import { Outlet } from 'react-router-dom';

function App() {

  const [authStatus, setAuthStatus] = useState(true);
  const [showProgress, setShowProgress] = useState(false);
  const [userInfo, setuserInfo] = useState(c_userInfo);
  const [showNavMenu, setShowNavMenu] = useState(true);

  const global = {
    showProgress,
    setShowProgress,
    showNavMenu,
    setShowNavMenu
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
