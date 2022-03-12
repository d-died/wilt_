import React from "react";
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { PostContext } from "../PostContext";
import { Button } from 'reactstrap'

const PostForm = ( form, setForm, modal, setModal, toggle, formToggle, formState, setFormState, handleChange, handleSubmit ) => {

    const [ posts, setPosts ] = useContext(PostContext)
    const [ postTitle, setPostTitle ] = useState('')
    const [ postDescription, setPostDescription ] = useState('') 
    // const [ formState, setFormState ] = useState({ title: '', description: ''})

    // const updateTitle = e => {
    //     // const { name, value } = e.target
    //     if ( e.target.name === 'title')
    //     setTitle(e.target.value)
    // }

    // const updateDescription = e => {
    //     if ( e.target.name === 'description')
    //     setDescription(e.target.value)
    // }

    // const handleChange = e => {
    //     const { name, value } = e.target;
    //     setPosts(prevState => ({
    //         ...prevState,
    //         [name]: value
    //     }));
    // };
    

    // const handleSubmit = e => {
    //     e.preventDefault()
    //     // console.log(formState)
    //     const { name, value } = e.target;
    //     setPosts(prevState => ({
    //         ...prevState,
    //         [name]: value
    //     }));
    //     // setModal(!modal)
    //     // setPosts(prevPosts => [...prevPosts], formState)
    //     // setPosts(prevPosts => ({...prevPosts, formState}))
    //     // console.log(formState)
    //     console.log(posts)
    //     // axios
    //     // .post('http://localhost:8000/posts', formState)
    //     // .catch(err => console.error(err))
    // }

    // console.log(posts)
    return(
        <></>
        // <div>
        //     <form onSubmit={ handleSubmit }>
        //     <div className="form">
        //         <label> Post title:
        //             <input name='title' type='text' onChange={ e => handleChange(e) } value={ formState.title }/> 
        //         </label>
        //         <label> What did you learn today?
        //             <input name='description' type='text' onChange={ e => handleChange(e) } value={ formState.description }/>
        //         </label>
                
        //     </div>
        // </form>
        // </div>
        
    )
}

export default PostForm