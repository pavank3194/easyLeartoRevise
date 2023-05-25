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
let component
// switch (window.location.pathname) {
//     case "/Python":
//         component=<Python/>
//         break;
//     case "/Java":
//         component=<Java/>
//         break;
//     case "/Html":
//         component=<Html/>
//         break;
//     case "/C":
//         component=<C/>
//         break;
//     case "/JavaScript":
//         component=<JavaScript/>
//         break;

    
// }
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

// switch (component.type.name){
//   case "Python":
//   root.render(
//     <div>
//       <App/>
//     </div>
//   )
//   break;
//   case "Java":
//     root.render(
//       <div>
//         <App/>
//       </div>
//     )
  
//   break;
//   case "JavaScript":
//   root.render(
//     <div>
//       <App/>
      
//     </div>
//   )
//   break;
//   case "C":
//   root.render(
//     <div>
      
//       <App/>
//     </div>
//   )
//   break;
//   case "Html":
//   root.render(
//     <div>
//       <App/>
//     </div>
//   )
//   break;
//   case "Css":
//   root.render(
//     <div>
//       <App/>
//     </div>
//   )
//   break;
//   case "Dbms":
//   root.render(
//     <div>
//       <App/>
//     </div>
//   )
//   break;
//   case "Php":
//   root.render(
//     <div>
//       <App/>
//     </div>
//   )
//   break;
//   case "C++":
//   root.render(
//     <div>
//       <App/>
//     </div>
//   )
//   break;
  
//   default :
//   <></>
//   break;
  
// };




// $ git config --global user.name "pavank3194" $ git config --global user.email "pavank3194@gmail.com"

