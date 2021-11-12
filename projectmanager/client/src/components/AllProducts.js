import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



const AllProducts = (props) => {

    const [allProducts, setAllProducts] = useState([])

    const [deleteToggle, setDeleteToggle] = useState(false)

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then(response =>{
            console.log("response", response)
            setAllProducts(response.data.results)
        })
        .catch(err=> console.log("error-->", err))

    }, [props.formSubmitted, deleteToggle])

    //  Delete function runs when its clicked 
    const deleteProduct = (idOfProduct)=>{
        console.log("deleting ninja with this is-->", idOfProduct)

        axios.delete(`http://localhost:8000/api/product/delete/${idOfProduct}`)
            .then(response=>{
                console.log("response after deleting->",response)

                setDeleteToggle(!deleteToggle) 
                //each time something gets deleted, we change this variable called deleteToggle to be the opposite of what it currently is (true->false or vice versa), 

            })
            .catch(err=>console.log(err))
    }

    return (
        <div>
            <h1>Here are all the products</h1>
            {
                allProducts.map((product, i)=>{
                    return (
                        <div key={i}  className="card">
                            <div className="card-body">
                                <h4 className="card-title">Title:  <Link to = {`/product/${product._id}`}>{product.title}</Link></h4>
                                <h6 className="card-subtitle mb-2 text-muted">Price:  {product.price}</h6>
                                <p className="card-text">Description: 
                                {product.description}
                                </p>
                                <p><button onClick= {(e)=>deleteProduct(product._id)} className="btn btn-danger mt-2">Delete {product.title}</button> | <Link to= {`/edit/${product._id}`}  className="btn btn-info">Edit</Link></p> 
                            
                            </div>
                            </div>

                    )
                })
            }
        </div>
    );
};



export default AllProducts;