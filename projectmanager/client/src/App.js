// import logo from './logo.svg';
// import './App.css';
import React, {useState} from 'react';
import AllProducts from './components/AllProducts';
import ProductForm from './components/ProductForm';
import Details from './components/Details';
import EditProduct from './components/EditProduct';

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
      <h1>Product Manager
      </h1>
      <Link to="/" className= "btn btn-success">Home</Link>  
        <Link to="/new" className= "btn btn-secondary">Create new product</Link>
      
        <Switch> {/* Anything inside switch means it will only show components at specific routes. Anything outside of switch will show in all the routes  */}
          <Route exact path = "/">
            <AllProducts formSubmitted = {formSubmitted}></AllProducts>
          </Route>

          <Route exact path = "/new">
            <ProductForm formSubmitted = {formSubmitted} setFormSubmitted= {setFormSubmitted}/>
          </Route>

          <Route exact path = "/product/:id"> {/* the :id is a route parameter and the ninjaDetail component can useParams() to extract the information in :id, which represents the id of the ninja we clicked on to see details of */}
            <Details/>
          </Route>

          <Route exact path = "/edit/:id">
              <EditProduct/>
          </Route>

        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
