import React, { Component } from 'react';
import logo from '../../logo.svg';

export class Home extends Component {

    render(){
        return(
            <div className="App">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
               Home.
            </p>
            
            </header>
            </div>

        );
    }
}

