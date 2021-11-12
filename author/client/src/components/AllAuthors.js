import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const AllAuthors = (props) => {

    const [allAuthors, setAllAuthors] = useState([])

    const [deleteToggle, setDeleteToggle] = useState(false)

    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors")
        .then(response =>{
            console.log("response", response)
            setAllAuthors(response.data.results.sort((a, b)=> a.name.localeCompare(b.name)))  //sorting it alphabetical
        })
        .catch(err=> console.log("error-->", err))

    }, [props.formSubmitted, deleteToggle])

    //  Delete function runs when its clicked 
    const deleteAuthor = (idOfAuthor)=>{
        console.log("deleting ninja with this is-->", idOfAuthor)

        axios.delete(`http://localhost:8000/api/author/delete/${idOfAuthor}`)
            .then(response=>{
                console.log("response after deleting->",response)

                setDeleteToggle(!deleteToggle) 
                //each time something gets deleted, we change this variable called deleteToggle to be the opposite of what it currently is (true->false or vice versa), 

            })
            .catch(err=>console.log(err))
    }


    return (
        <div>
            <h1> Favorite Authors: </h1>
            <Link to={`/authors/new`} className="btn btn-success">Add New</Link>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        
                        <th>Author</th>
                        <th>Actions available</th>
                    </tr>
                </thead>
                <tbody>
                    { allAuthors.map(author =>
                    <tr key={`${author._id}`}>
                        
                        <td><Link to={`/authors/${author._id}`}>{author.name}</Link></td>
                        <td>  <Link  to={`/authors/edit/${author._id}`}>
                                <button  className="btn btn-success" >
                                    Edit
                                </button>
                            </Link>
                            <button className="btn btn-danger" onClick={(e)=>{deleteAuthor(author._id)}}>
                                Delete
                            </button></td>
                    </tr> )
                    }
                </tbody>
            </table>

        </div>
    );
};



export default AllAuthors;