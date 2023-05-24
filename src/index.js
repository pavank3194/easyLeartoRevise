import React from 'react';
import ReactDOM from 'react-dom/client';

import './componentsLinks/App.css';

import Navbar from './Navbar';
import Header from'./components/header';
import Language from './components/language';
import App from './componentsLinks/App';


import Python from'./componentsLinks/Python/Python';
import Java from './componentsLinks/Java/Java';
import C from './componentsLinks/C/C';
import Html from './componentsLinks/HTML/Html';
import JavaScript from './componentsLinks/JavaScript/JavaScript'



const val=document.getElementById('root');
const root = ReactDOM.createRoot(val);
let component
switch (window.location.pathname) {
    case "/easyLeartoRevise/Python":
        component=<Python/>
        break;
    case "/Java":
        component=<Java/>
        break;
    case "/Html":
        component=<Html/>
        break;
    case "/C":
        component=<C/>
        break;
    case "/JavaScript":
        component=<JavaScript/>
        break;
    default :
        component=<Python/>
        break;

    
}
root.render(

    

    <div className="nav-header">
    
      <Navbar/>
      <Header/>
      <Language/>


  </div>
);
// if(component.type.name){
//   root.render(
//     <div>
//       <App/>
//     </div>
//   )
// }


// $ git config --global user.name "pavank3194" $ git config --global user.email "pavank3194@gmail.com"

