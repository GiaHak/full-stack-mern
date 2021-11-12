import React, {useState} from 'react';
import axios from 'axios'
import { useHistory } from "react-router-dom";

const NewAuthor = (props) => {
    const history = useHistory() //using history to that we can redirect to "/" when the form submits
    
    const [formInfo, setFormInfo] = useState({
        name: ""
    })
    const [formErrors, setFormErrors] = useState({
        name:""
    })


    
    const changeHandler = (e) =>{
        console.log("changing the form")
        setFormInfo({
            ...formInfo,
            [e.target.name] : e.target.value
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault()
        
        axios.post("http://localhost:8000/api/author/create", formInfo)
            .then(response=>{
                console.log(response)
                
                if(response.data.err){ //if the form is not filled out properly
                    setFormErrors(response.data.err.errors)
                }else{
                    props.setFormSubmitted(!props.formSubmitted)
    
                    setFormInfo({
                        name:""

                })
                   //redirect to "/" after creating a ninja
                history.push("/")
            }
            })
            .catch(err=>console.log("error submitting the post request-->", err))

    }

    return (
        <div>
            <h3>Add a new author</h3>
            <form onSubmit= {submitHandler}>
                <div className="form-group">

                    <label htmlFor="">Name:</label>
                    <input onChange={changeHandler} type="text" name="name" id="" className="form-control" />

                    <p className="text-danger">{formErrors.name?.message}</p>

                </div>
                <input type="submit" value="Add New Author" className="btn btn-success mt-3" />

            </form>
        </div>
    );
};



export default NewAuthor;