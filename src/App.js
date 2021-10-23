import React, {Component, useEffect } from 'react';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Employees from "./Employees/employees"


// BOOTSTRAP
// IFRAME
// REACT?
// ALL THE SHIT ABOVE
// MONGODB SHIT 
// THE SERVER STUFF? NODEMON?
console.log("working")


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      timePassed: false
    };
  }
  render() {
    setTimeout(() => {this.setState({timePassed: true})}, 10000);
    if (!this.state.timePassed){
      return (      
        <div><p>Loading . . .  </p></div>
        
        );
      }else{
        
        return (
        <Employees />
      );
  }
  }
}
export default App;
// class App extends Component {
//   componentDidMount() {
//     document.title = "R2R Group Betting";
//   }
//     render(){
//       return(
//         jQuery(document).ready(function ($) {
//           $(window).load(function () {
//               setTimeout(function(){
//                   $('#preloader').fadeOut('slow', function () {
//                   });
//               },2000);
      
//           });  
//       });
//           <Employees />
//        )
//      }

//     }


// export default App;