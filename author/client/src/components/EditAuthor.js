import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";

const EditAuthor = (props) => {
    const { id } = useParams();
    const history = useHistory()


    const [formInfo,setFormInfo] = useState({
        name:""
    })
    const [formErrors, setFormErrors] = useState({
        name:""
    })


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/author/${id}`)
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

    const submitHandler = (e)=>{
        e.preventDefault()
                //when form is submitted, we make an axios call to our backend route to update something given an id and some data (forminfo) to update it with so it know which object to update using the id, and what info to update it with using the formInfo
                axios.put(`http://localhost:8000/api/author/update/${id}`,formInfo)
                .then(response=>{
                    console.log("response from the put request", response)
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
                .catch(err=>console.log(err))
        
    }
    return (
        <div>
            { 
            formInfo!=null?  // 
            // <h3>Edit Author</h3>
            <form onSubmit= {submitHandler}>
                <div className="form-group">

                    <label htmlFor="">Name:</label>
                    <input onChange={changeHandler} type="text" name="name" id=""   value= {formInfo.name} className="form-control" />
                    <p className="text-danger">{formErrors.name?.message}</p>
                    
                </div>
                <input type="submit" value="Update Author!" className="btn btn-success mt-3" /> 
                <input type="submit" value="Cancel" className="btn btn-success mt-3" />

                </form>
            :   
            <div>
                <h1>We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?</h1>
            </div>
            }
        </div>
    );
};


export default EditAuthor;