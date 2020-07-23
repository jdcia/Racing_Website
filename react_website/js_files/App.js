import React, { Component } from 'react';
import Main_page from './pages/Main_page.js';
import Navbar from './nav_bar/Navbar.js';
import About from './pages/About.js';
import ContactUs from './pages/ContactUs.js';
import Pigeon from './pages/Pigeon.js';
import Methods from './pages/Methods.js';

import '../css_files/App.css';

class App extends Component{


   constructor(){
      super();
      this.state = {
         page : "Home"
      };

   }
   
   state_handler(state){
      this.setState({
          page : state
      });
   }

   select_page(){
      switch(String(this.state.page)){
         case "Home":
            return <Main_page />;
         case "Pigeons":
            return <Pigeon />;
         case "Methods":
            return <Methods />;
         case "About":
            return <About />;
         case "Contact Us":
            return <ContactUs />;
      }
   }

   render(){

      document.body.classList.add('body');

      return(
         <div className = "app">
            <Navbar handler={this.state_handler.bind(this)}/>
            {this.select_page()}
         </div>
      );
   }
}
export default App; 