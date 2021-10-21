import React from 'react';

import { 
    Container,
    Button,
    ButtonConfirm
 } from './styles'

 const FormDelete = ({ id,setShow }) => {  

    const handleDelete = (id) => {
        console.log(id)
    }
    
    return (
        <Container>
            <Button onClick={() => setShow(false)}>No</Button>
            <ButtonConfirm onClick={() => handleDelete(id)}>Si</ButtonConfirm>
        </Container>
    );
}

export default FormDelete;