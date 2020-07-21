import React, { Component } from 'react';

import '../css_files/Navbar.css';

class Navbar extends Component{
    render(){
       return(
         <div class="nav">
            <div class="links">

                <div class="nav_link">
                    Home
                </div>

                <div class="nav_link">
                    Pigeons
                </div>

                <div class="nav_link">
                    Methods
                </div>

                <div class="nav_link">
                    About
                </div>

                <div class="nav_link">
                    Contact Us
                </div>
            </div>

            <div class="right">
                <div class="logo">
                    <div>LOGO HERE</div>
                </div>
            </div>

     </div>
       );
    }
 }
 export default Navbar; 