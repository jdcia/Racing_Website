import React, { Component } from 'react';
import Main_page from './Main_page.js';
import Navbar from './Navbar.js';

import '../css_files/App.css';

class App extends Component{
   render(){
      return(
         <div class = "app">
            <Navbar />
            <Main_page />
         </div>
      );
   }
}
export default App; 