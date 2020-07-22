import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../../css_files/nav_bar/Navlink.css';

class Navbar extends Component{
    constructor(prop){
        super(prop);
        this.name = prop.name;
        this.handler = prop.handler;


        
    }

    componentDidMount(){
        ReactDOM.findDOMNode(this).addEventListener('click', () => {
            this.handler(this.name);          
        });
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