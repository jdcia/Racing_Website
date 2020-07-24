import React, { Component } from 'react';

import '../../css_files/pages/Main_page.css';

class Main_page extends Component{ 
    constructor(prop){
        super(prop);
        var fs = require('fs');
        var files = fs.readdirSync('../../images');
    }

    render(){
        
       return(
        <div className="body_message" style={{backgroundImage: 'url(../../images/backup2.jpg)'}}>
            

            <div className="body_center">
            </div>
            
        </div>
       );
    }
 }
 export default Main_page; 