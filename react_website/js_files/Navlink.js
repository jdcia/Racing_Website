import React, { Component } from 'react';

import '../css_files/Navlink.css';

class Navbar extends Component{
    constructor(prop){
        super(prop);
        this.name = prop.name;
    }

    render(){
        return(
            <div className="nav_option">
                <div className="nav_home">
                    <a >{this.name}</a>
                </div>
            </div>

        );
    }
 }
 export default Navbar; 