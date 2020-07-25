import React, { Component } from 'react';

import '../../css_files/pages/Main_page.css';

class Main_page extends Component{ 


    constructor(prop){
        super(prop);

        console.log("before api");
        fetch("http://127.0.0.1:5000/")
        .then((response) => response.json())
        .then(data => console.log(data.some));

        this.image = 'url("../../images/backup2.jpg")';
    }

    render(){
        
       return(
        <div className="body_message" style={{backgroundImage: this.image}}>
            

            <div className="body_center">
            </div>

        </div>
       );
    }
 }
 export default Main_page; 