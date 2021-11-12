import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const Details = () => {
    const { id } =useParams();
    const history = useHistory();
    const [productInfo, setProductInfo] = useState({})
useEffect(()=>{  
    axios.get(`http://localhost:8000/api/product/${id}`)
    .then(response =>{
        console.log("one product", response)
        setProductInfo(response.data.results)
    })
    .catch(err=> console.log(err))
}, [])

const deleteProduct = ()=>{
    console.log("deleting product-->", id)
    axios.delete(`http://localhost:8000/api/product/delete/${id}`) //make an axios call to our backend route to delete ninja by id. wehave this id available from the route parameter
        .then(response=>{
            console.log("response after deleting->",response)
            history.push("/") //redirect to "/" after deleting the ninja

        })
        .catch(err=>console.log(err))
}
    return (
        <div>
            <h1>Product Details</h1>
            <p>Product ID: {id}</p>
            <p> Title: {productInfo.title}</p>
            <p>Price: {productInfo.price}</p>
            <p>Description: {productInfo.description}</p>

            <button onClick= {deleteProduct} className="btn btn-danger">Delete {productInfo.title} </button>
            
        </div>
    );
};



export default Details;