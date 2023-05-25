import React from 'react';

import AppNavbar from '../App-navbar';


function C(){
    return(
        <>
            <AppNavbar/>
        <div className="content-language-details">
                <div className="content-language-left">
                    <ul>
                        <dl><h2> C Programming</h2></dl>
                        <br />
                        <li>Lists</li><br />
                        <li>Data Types</li><br />
                        <li>Oops</li><br />
                        <li>Keywords</li><br />
                        <li>Literals</li><br />
                        <li>Operators</li><br />
                        <li>Loops</li><br />
                        <li>Conditional Statements</li><br />
                        <li>Stacks</li><br />
                        <li>Queue</li><br />
                        <li>LinkedList</li><br />
                        <li>History</li>
                    </ul>
                </div>
                <div className="content-language-right">
                    <h1>C Programming</h1>
                </div>
            </div>
            </>
    )
};

export default C;