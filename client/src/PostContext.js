import React, { useState, createContext } from 'react'


export const PostContext = createContext()

export const PostProvider = (props) => {

    const [ posts, setPosts ] = useState({ title: '', description: '', upvotes: 0})
    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('') 

    return (
        <PostContext.Provider value={[ posts, setPosts, title, setTitle, description, setDescription ]}>
            { props.children }
        </PostContext.Provider>
    )
    
}


