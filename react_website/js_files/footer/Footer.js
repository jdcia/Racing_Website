import React, { Component } from 'react';

import '../../css_files/footer/Footer.css';

class App extends Component{

   render(){

      return(
         <div className="footer">
               <div className="left">
               Insert cool pitch here.
               </div>
               <div className="footer_logo"/>
               <div className="right">
                  Contact:<br/>
                  Phone Number: xxx-xxx-xxxx<br/>
                  Mailing Address: somewhere, somestate, 12345<br/>
               </div>

         </div>
      );
   }
}
export default App; 