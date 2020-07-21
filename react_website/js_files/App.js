import React, { Component } from 'react';
import Main_page from './Main_page.js';
import Navbar from './Navbar.js';

import '../css_files/App.css';

class App extends Component{


   constructor(){
      super();
      this.state = {
         page : "nav_home"
      };

   }
   


   render(){
      return(
         <div className = "app">
            <Navbar />
            <Main_page />
         </div>
      );
   }
}
export default App; 