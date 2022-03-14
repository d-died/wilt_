import React from "react"
import '../App.css'
import { Button } from 'reactstrap'
import axios from "axios"
import Post from './Post'

const MyPosts = ({ posts, password }) => {


    console.log(posts)
    
    const deletePost = (id) => {
        // console.log(id)
        // console.log(postData.id)
        // if (id === )
        axios
            .delete(`http://localhost:8000/posts/${ id }`)
            .catch(err => console.error(err))

        // setUpdate(!update)
        
    }

    // console.log(posts.posts)
    // const postData = posts.posts
    // console.log(postData)
    // if(!postData) {
    //     return( 'Loading ...')
    // } 
    return (
      
        <div className="posts">
            { posts.map((post, index) => {
                return(
                    <div className="userPost" key={ post.id }>
                        <h3>{ post.title }</h3>
                        <p>{ post.description }</p>
                        <Button color='success' onClick={ () => {deletePost(post.id)} }>Delete me</Button>
                    </div>
                )})}
        </div>
    )}
    

export default MyPosts