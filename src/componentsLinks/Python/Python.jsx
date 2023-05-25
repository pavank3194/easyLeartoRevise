import React , {useEffect , useState} from 'react';

import PythonDatatypes from './Python-Datatypes';
import PythonOops from './Python-Oops';

import AppNavbar from '../App-navbar';

import './Python.css'


function Python(){

    var prevScrollpos = window.pageYOffset;
    var navbar = document.querySelector("content-language-navbar");
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        navbar.classList.remove("hidden");
    } else {
        navbar.classList.add("hidden");
    }
    prevScrollpos = currentScrollPos;
    }



    return(
        <>
        <AppNavbar/>
                <div className="Python-language-Discription">
                    <PythonDatatypes/><br /><br /><hr /><br />
                    <PythonOops/>
                </div>
            </>
    )
};

export default Python;