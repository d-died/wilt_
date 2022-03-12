import React from "react"
import '../App.css'
import { Button } from 'reactstrap'
import axios from "axios"

const MyPosts = ( posts, props ) => {

    const deletePost = (id) => {
        
    }

    console.log(posts.posts)
    const postData = posts.posts
    if(!postData) {
        return( 'Loading ...')
    } 
    return (
        <div className="posts">
            { postData.map((post, index) => {
                return(
                    <div className="userPost">
                        <h3>{ post.title }</h3>
                        <p>{ post.description }</p>
                        <Button color='success' onClick={ () => {deletePost()} }>Delete me</Button>
                    </div>
                )})}
        </div>
    )}
    

export default MyPosts