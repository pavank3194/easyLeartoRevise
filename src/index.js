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

switch (component.type.name){
  case "Python":
  root.render(
    <div>
      <App/>
    </div>
  )
  break;
  case "Java":
    root.render(
      <div>
        <App/>
      </div>
    )
  
  break;
  case "JavaScript":
  root.render(
    <div>
      <App/>
      
    </div>
  )
  break;
  case "C":
  root.render(
    <div>
      
      <App/>
    </div>
  )
  break;
  case "Html":
  root.render(
    <div>
      <App/>
    </div>
  )
  break;
  case "Css":
  root.render(
    <div>
      <App/>
    </div>
  )
  break;
  case "Dbms":
  root.render(
    <div>
      <App/>
    </div>
  )
  break;
  case "Php":
  root.render(
    <div>
      <App/>
    </div>
  )
  break;
  case "C++":
  root.render(
    <div>
      <App/>
    </div>
  )
  break;
  
  default :
  <></>
  break;
  
};
console.log(component.type.name)



// $ git config --global user.name "pavank3194" $ git config --global user.email "pavank3194@gmail.com"

