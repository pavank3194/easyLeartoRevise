import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import './componentsLinks/App.css';

import Navbar from './Navbar';
import Header from'./components/header';
import Language from './components/language';


import Python from'./componentsLinks/Python/Python';
import Java from './componentsLinks/Java/Java';
import C from './componentsLinks/C/C';
import Html from './componentsLinks/HTML/Html';
import JavaScript from './componentsLinks/JavaScript/JavaScript'

import AppNavbar from './componentsLinks/App-navbar';



const val=document.getElementById('root');
const root = ReactDOM.createRoot(val);

let maincomponent=
<div>
  <Header/>
  <Language/>
</div>
root.render(

    

    <div className="nav-header">
    
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={maincomponent} />
          <Route path="/Python" element= {<Python/>} />
          <Route path="/Java" element={<Java/>} />
          <Route path="/C" element={<C/>} />
          <Route path="/JavaScript" element={<JavaScript/>} />
          <Route path="/Html" element={<Html/>} />
        </Routes>
      </Router>

  </div>
);


// $ git config --global user.name "pavank3194" $ git config --global user.email "pavank3194@gmail.com"

