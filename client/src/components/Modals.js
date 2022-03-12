import React, { useEffect, useState } from 'react'
import { Modal, Button, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import PostForm from './PostForm'
import axios from 'axios'

const Modals = ( update, setUpdate ) => {

    const [ modal, setModal ] = useState(false)
    const toggle = () => {
        setModal(!modal)
        console.log(modal)
    }
    const [ form, setForm ] = useState(false)
    const formToggle = () => {
        setModal(!modal)
        setForm(!form)
        setUpdate(!update)
        console.log(form, modal)
    }

    

    const [ formState, setFormState ] = useState({ title: '', description: ''})

    const handleChange = e => {
        const { name, value } = e.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault()
        console.log(formState)
        const { name, value } = e.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }));

        axios
            .post('http://localhost:8000/posts', formState)
            .catch(err => console.error(err))

        
    }

    return(
        <div>
            <Button
                color="danger"
                onClick={formToggle}
            >
                Make a post
            </Button>
            
        <Modal 
            centered 
            isOpen={modal} 
            toggle={ toggle } >
            <form onSubmit={ handleSubmit }>
            <ModalHeader >
                What did you learn today?
            </ModalHeader>
            <ModalBody>
                 <div>              
                    <div className="form">
                        <label> Post title:
                            <input name='title' type='text' onChange={ e => handleChange(e) } value={ formState.title }/> 
                        </label>
                        <label> What did you learn today?
                            <input name='description' type='text' onChange={ e => handleChange(e) } value={ formState.description }/>
                        </label> 
                    </div>
                </div> 
            </ModalBody>
            <ModalFooter>
            <Button
                color="primary"
                type='submit'
                onClick={ formToggle }
            >
                { form && 'Submit Post'}
            </Button>
            <Button onClick={toggle}>
                Cancel
            </Button>
            </ModalFooter>
            </form>

        </Modal>
            
            
            
            </div>
    )
}

export default Modals