import React, { useState, useEffect } from 'react'
import NavBar from './components/Nav/NavBar'
import MyPosts from './components/MyPosts'
import Modals from './components/Modals'
import { PostProvider } from './PostContext'
import About from './components/About'
import Intro from './components/Intro'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { 
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button
} from 'reactstrap'


function App() {

  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('password')
  const [ posts, setPosts ] = useState([])


  // const [ update, setUpdate ] = useState(false)
  // useEffect(() => {}, [update])

  useEffect(() => {

    getPosts()

  }, []);


  const getPosts = async () => {
    const res = await axios.get('http://localhost:8000/posts')
    const data = await res.data
    setPosts(data)
    
    console.log(data)
    console.log(posts)
  }
    
    
  // const getPosts = () => {
  //     axios.get('http://localhost:8000/posts')
  //       // .then((res) => res.json())
  //       .then(json => setPosts(json.data))
  //       console.log(posts)
  //   }

  // getPosts()

  console.log(posts)
  // console.log()

 
  const deletePost = (id) => {
    // console.log(id)
    // console.log(postData.id)
    // if (id === )
    axios
        .delete(`http://localhost:8000/posts/${ id }`)
        .catch(err => console.error(err))

    // setUpdate(!update)
    
  }

  //const postData = posts.posts
  //console.log(postData)


  return (
    // <PostProvider>
       <div className="App">
        <div className="scollbox">
        <section id='home'>
          <NavBar />
        </section>
        <section id='intro'>
          <Intro />
          {/* <label>Username / Email 
            <input name='username' type='text' onChange={e => e.target.value} />
          </label> */}
          
        </section>
        <section id='posts'>
          <MyPosts
            posts={ posts }
            password={ password }
            // update={ update }
            // setUpdate={ setUpdate }  
          />
        </section>
        <section>
          <Modals 
            // update={ update }
            // setUpdate={ setUpdate }
            // formState={ formState }
            // setFormState={ setFormState }
            // handleChange={ handleChange }
            // handleSubmit={ handleSubmit }
            />
        </section>
        <section id='about'>
          <About />
        </section> 
      </div>
      </div>

    // </PostProvider>
   
  );
}


export default App;