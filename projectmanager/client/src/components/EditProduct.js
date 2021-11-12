import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";

const EditProduct = (props) => {
    const { id } = useParams();
    const history = useHistory()


    const [formInfo,setFormInfo] = useState({
        title:"",
        price:"",
        description:""
    })

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(response=>{
                console.log(" ONE product-->", response)
                setFormInfo(response.data.results)
            })
            .catch(err=> console.log(err))
    },[])

    const changeHandler = (e) =>{
        console.log("changing the form")
        setFormInfo({
            ...formInfo,
            [e.target.name] : e.target.value
        })
    }

    //submithandler for when the form submits we send this date to backend to create something new
    const submitHandler = (e)=>{
        e.preventDefault()
                //when form is submitted, we make an axios call to our backend route to update something given an id and some data (forminfo) to update it with so it know which object to update using the id, and what info to update it with using the formInfo
                axios.put(`http://localhost:8000/api/product/update/${id}`,formInfo)
                .then(response=>{
                    console.log("response from the put request", response)
                    history.push("/")
                })
                .catch(err=>console.log(err))
        
    }
    return (
        <div >
            { 
            formInfo!=null? 
            // <h3>Edit Product</h3>
            <form onSubmit= {submitHandler}>
                <div className="form-group">

                    <label htmlFor="">Title:</label>
                    <input onChange={changeHandler} type="text" name="title" id=""   value= {formInfo.title} className="form-control" />

                    
                </div>

                <div className="form-group">

                    <label htmlFor="">Price:</label>
                    <input onChange={changeHandler} type="number" name="price" id=""  value= {formInfo.price} className="form-control"  />

                    

                </div>

                <div className="form-group">

                    <label htmlFor="">Description:</label>
                    <input onChange={changeHandler} type="text" name="description" id=""  value= {formInfo.description} className="form-control" />

                    
                    
                </div>

                <input type="submit" value="Update Product!" className="btn btn-success mt-3" />

            </form>
            :
            <div>
                <h1>We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?</h1>
            </div>
            }
        </div>
    );
};



export default EditProduct;