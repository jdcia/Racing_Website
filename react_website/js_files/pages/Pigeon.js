import React, { Component } from 'react';
import Pigeon_unit from './Pigeon_unit.js';

import '../../css_files/pages/Pigeon.css';

class Pigeon extends Component{


    componentDidMount(){
        
    }

    render(){
       return(
        <div className="pigeon_page">

            <div className="pigeons_container">

                <Pigeon_unit/>

                <Pigeon_unit/>

                <Pigeon_unit/>

            </div>
        </div>
       );
    }
 }
 export default Pigeon; 