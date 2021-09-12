import React, {Component} from 'react';
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
  componentDidMount() {
    document.title = "R2R Group Betting";
  }
    render(){
      return(
          <Employees />
       )
     }

    }


export default App;