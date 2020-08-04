import React, { Component } from 'react';

import regeneratorRuntime from "regenerator-runtime";


import '../../css_files/pages/Pigeon_unit.css';

class Pigeon_unit extends Component{

    constructor(prop){
        super(prop);
        //Do stuff with prop
        this.state = {
            image : null,
            age : null,
            family : null,
            gender : null,
            father : null,
            mother : null
        };
    }

    async componentDidMount(){


        var url = new URL("http://127.0.0.1:5000/pigeons");
        var params = {
            data_num : 2
        }

        url.search = new URLSearchParams(params).toString();


        var data = await fetch(url).then(resp => resp.json());

        this.setState({
            image : data.image,
            name : data.name,
            age : data.age,
            family : data.family,
            gender : data.gender,
            father : data.father,
            mother : data.mother
        });


    }


    render(){
       return(
        <div className="unit">

            <img src={`data:image/png;base64,${this.state.image}`} className="image"/>


            <div className="stats">
                Name: {this.state.name} <br/>
                Age: {this.state.age} <br/>
                Gender: {this.state.gender} <br/>
            </div>

            <div className="family">
                Family: {this.state.family} <br/>
                Father: {this.state.father} <br/>
                Mother: {this.state.mother} <br/>
            </div>

                


        </div>
       );
    }
 }
 export default Pigeon_unit; 

