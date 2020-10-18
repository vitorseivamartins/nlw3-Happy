import React, { useState, useEffect }  from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';

import '../styles/pages/landing.css';

import logoImg from '../images/logo.svg';

function Landing() {

  const [isdarkTheme, setDarkTheme] = useState(getInitialTheme);

  useEffect(() => { 
    localStorage.setItem("dark", JSON.stringify(isdarkTheme));
  }, [isdarkTheme]);
  function getInitialTheme() {
    const isSavedThemeDark = localStorage.getItem('dark');
    return isSavedThemeDark != null ? JSON.parse(isSavedThemeDark) : false;
  }

  return (
    <div id={isdarkTheme? "dark-theme" : "light-theme"}>
      <div id="page-landing">
        <div className="content-wrapper">
          <img src={logoImg} alt="Happy"/>

          <main>
            <h1>Leve felicidade para o mundo</h1>
            <p>Visite orfanatos e mude o dia de muitas crianças</p>
          </main>

          <div className="location">
            <strong>Ribeirão Preto</strong>
            <span>São Paulo</span>
          </div>

          <span className="theme-toogle">               
                            <BootstrapSwitchButton                                
                                checked={isdarkTheme} 
                                offstyle="light" style="border"
                               
                                onlabel="Tema escuro"
                                offlabel="Tema claro"
                                
                                onChange={() => {setDarkTheme(!isdarkTheme) }}
                            />
          </span>

          <Link to="/app" className="enter-app">
            <FiArrowRight size={26} color="rgba(0, 0, 0, .6)" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;