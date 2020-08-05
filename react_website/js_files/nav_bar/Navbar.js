import React, { Component } from 'react';
import Navlink from './Navlink.js';


import '../../css_files/nav_bar/Navbar.css';

class Navbar extends Component{
    constructor(prop){
        super(prop);
        this.handler = prop.handler;
    }


    render(){

        return(
            <div className="nav">
                <div className="links">

                    {/* Each of the following navlinks will
                    change this body component.
                    */}

                    <Navlink name="Home" handler = {this.handler}/>

                    <Navlink name="Pigeons" handler = {this.handler}/>

                    <Navlink name="Methods" handler = {this.handler}/>

                    <Navlink name="About" handler = {this.handler}/>

                </div>

                <div className="logo"/>

            </div>
        );
    }
 }
 export default Navbar; 