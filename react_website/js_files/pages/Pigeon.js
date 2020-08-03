import React, { Component } from 'react';
import Pigeon_unit from './Pigeon_unit.js';

import '../../css_files/pages/Pigeon.css';

class Pigeon extends Component{

    constructor(){
        super();
    }


    componentDidMount(){

        var url = new URL("http://127.0.0.1:5000/pigeons");
        var params = {
            data_num : 2
        }

        url.search = new URLSearchParams(params).toString();


        fetch(url).then(resp => resp.json()).then(data => console.log(data));


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