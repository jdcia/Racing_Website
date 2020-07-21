import React, { Component } from 'react';

import '../css_files/Navbar.css';

class Navbar extends Component{
    render(){
       return(
         <div class="nav">
            <div class="links">

                <div class="nav_option">
                    <div class="nav_home">
                        Home
                    </div>
                </div>

                <div class="nav_option">
                    <div class="nav_pigeon">
                        Pigeon
                    </div>
                </div>

                <div class="nav_option">
                    <div class="nav_method">
                        Methods
                    </div>
                </div>

                <div class="nav_option">
                    <div class="nav_about">
                        About
                    </div>
                </div>

                <div class="nav_option">
                    <div class="nav_contact">
                        Contact us
                    </div>
                </div>
            </div>

     </div>
       );
    }
 }
 export default Navbar; 