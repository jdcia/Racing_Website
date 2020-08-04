import React, { Component } from 'react';

import regeneratorRuntime from "regenerator-runtime";


import '../../css_files/pages/Pigeon.css';

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

        console.log(data);

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


            <div src={this.state.image} className="image"/>

            <div className="info">

                <div className="name">
                    {this.state.name}
                </div>

                <div className="age">
                    {this.state.age}
                </div>

                <div className="family">
                    {this.state.family}
                </div>

                <div className="gender">
                    {this.state.gender}
                </div>

                <div className="father">
                    {this.state.father}
                </div>

                <div className="mother">
                    {this.state.mother}
                </div>

                

            </div>


        </div>
       );
    }
 }
 export default Pigeon_unit; 

