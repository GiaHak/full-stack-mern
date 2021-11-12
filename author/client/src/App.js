import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import AllAuthors from './components/AllAuthors';
import NewAuthor from './components/NewAuthor';
import EditAuthor from './components/EditAuthor';
// import axios from 'axios';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const[formSubmitted, setFormSubmitted] = useState(false)
  
  return (
    <BrowserRouter>
    <div className="App container">
      
      <Link to="/" className= "btn btn-success">Home</Link>  

      <Switch> {/* Anything inside switch means it will only show components at specific routes. Anything outside of switch will show in all the routes  */}
          <Route exact path = "/">
            <AllAuthors  formSubmitted = {formSubmitted}> </AllAuthors>
          </Route>

          <Route exact path = "/authors/new">
            <NewAuthor formSubmitted = {formSubmitted} setFormSubmitted= {setFormSubmitted}/>
          </Route>

        

          <Route exact path = "/authors/edit/:id">
              <EditAuthor formSubmitted = {formSubmitted} setFormSubmitted= {setFormSubmitted}/>
          </Route>

        </Switch>


    </div>



    </BrowserRouter>
  );
}

export default App;
