import React, { Component } from 'react';

import '../css_files/Navbar.css';

class Navbar extends Component{
    constructor(prop){
        super(prop);
        this.par_state = prop.state;
    }

    render(){
        
        const links = document.querySelectorAll("nav_option");

        links.forEach(x => {
            x.addEventListener('click', () => {
                console.log("-------");
                console.log(x.childNodes);
            });
        });

        return(
            <div className="nav">
                <div className="links">

                    <div className="nav_option">
                        <div className="nav_home">
                            <a >Home</a>
                        </div>
                    </div>

                    <div className="nav_option">
                        <div className="nav_pigeon">
                            <a>Pigeon</a>
                        </div>
                    </div>

                    <div className="nav_option">
                        <div className="nav_method">
                            <a>Methods</a>
                        </div>
                    </div>

                    <div className="nav_option">
                        <div className="nav_about">
                            <a>About</a>
                        </div>
                    </div>

                    <div className="nav_option">
                        <div className="nav_contact">
                            <a>Contact us</a>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
 }
 export default Navbar; 