import React, { Component } from 'react';
import Pigeon_unit from './Pigeon_unit.js';

import regeneratorRuntime from "regenerator-runtime";

import '../../css_files/pages/Pigeon.css';

class Pigeon extends Component{

    constructor(){
        super();

        this.state = {
            cur : 1,
            rows : []
        };
    }


    async componentDidMount(){

        var url = new URL("http://127.0.0.1:5000/size");

        var data = await fetch(url).then(resp => resp.json());

        var size = data.total_images;

        var result = [];

        for(var i = 0; i < size; i++){
            result.push(<Pigeon_unit key={i} />);
        }

        this.setState({
            rows : result
        });

    }

    render(){

       return(


        <div className="pigeon_page">

            <div className="pigeons_container">

                {this.state.rows}

            </div>
        </div>
       );
    }
 }
 export default Pigeon; 