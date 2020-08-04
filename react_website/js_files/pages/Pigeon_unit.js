import React, { Component } from 'react';

import '../../css_files/pages/Pigeon.css';

class Pigeon_unit extends Component{

    constructor(prop){
        super(prop);
        //Do stuff with prop
    }


    render(){
       return(
        <div className="unit">
            Test
        </div>
       );
    }
 }
 export default Pigeon_unit; 

 /*
        Use this to get page info. In componentdidmount()

         var url = new URL("http://127.0.0.1:5000/pigeons");
        var params = {
            data_num : 2
        }

        url.search = new URLSearchParams(params).toString();


        fetch(url).then(resp => resp.json()).then(data => console.log(data));



 */