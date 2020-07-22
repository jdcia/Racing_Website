import React, { Component } from 'react';
import Navlink from './Navlink.js';


import '../css_files/Navbar.css';

class Navbar extends Component{
    constructor(prop){
        super(prop);
        this.par_state = prop.state;
    }

    render(){

        return(
            <div className="nav">
                <div className="links">

                    {/* Each of the following navlinks will
                    change this body component.
                    */}

                    <Navlink name="Home"/>

                    <Navlink name="Pigeons"/>

                    <Navlink name="Methods"/>

                    <Navlink name="About"/>

                    <Navlink name="Contact Us"/>

                </div>

            </div>
        );
    }
 }
 export default Navbar; 