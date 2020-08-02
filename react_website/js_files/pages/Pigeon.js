import React, { Component } from 'react';

import '../../css_files/pages/Pigeon.css';

class Pigeon extends Component{
    render(){
       return(
        <div className="pigeon_page">
            
            <div className="pigeons_container">
                <pigeon_unit/>

                <pigeon_unit/>

                <pigeon_unit/>

            </div>
        </div>
       );
    }
 }
 export default Pigeon; 