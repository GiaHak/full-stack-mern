import React, {useState} from 'react';
import axios from 'axios'
import { useHistory } from "react-router-dom";

const ProductForm = (props) => {
    const history = useHistory() //using history to that we can redirect to "/" when the form submits
    
    const [formInfo,setFormInfo] = useState({
        title:"",
        price:"",
        description:""
    })
    const [formErrors, setFormErrors] = useState({
        title:"",
        price:"",
        description:""
    })


    
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
        
        axios.post("http://localhost:8000/api/product/create", formInfo)
            .then(response=>{
                console.log(response)
                
                if(response.data.err){ //if the form is not filled out properly
                    setFormErrors(response.data.err.errors)
                }else{
                    props.setFormSubmitted(!props.formSubmitted)
    
                    setFormInfo({
                        title:"",
                        price:"",
                        description:""

                })
                   //redirect to "/" after creating a ninja
                history.push("/")
            }
            })
            .catch(err=>console.log("error submitting the post request-->", err))

    }
    return (
        <div >
            <h3>Create a Product</h3>
            <form onSubmit= {submitHandler}>
                <div className="form-group">

                    <label htmlFor="">Title:</label>
                    <input onChange={changeHandler} type="text" name="title" id="" className="form-control" />

                    <p className="text-danger">{formErrors.title?.message}</p>
                </div>

                <div className="form-group">

                    <label htmlFor="">Price:</label>
                    <input onChange={changeHandler} type="number" name="price" id="" className="form-control"  />

                    <p className="text-danger">{formErrors.price?.message}</p>

                </div>

                <div className="form-group">

                    <label htmlFor="">Description:</label>
                    <input onChange={changeHandler} type="text" name="description" id="" className="form-control" />

                    <p className="text-danger">{formErrors.description?.message}</p>
                    
                </div>

                <input type="submit" value="Create Product!" className="btn btn-success mt-3" />

            </form>
        </div>
    );
};



export default ProductForm;