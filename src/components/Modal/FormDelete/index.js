import React from 'react';

import { 
    Container,
    Button,
    ButtonConfirm
 } from './styles'

 const FormDelete = ({ id, setShow, setSelected }) => {  

    const handleCancel = () => {
        setSelected(null);
        setShow(false);
    }

    const handleDelete = id => {
        console.log(id)
    }
    
    return (
        <Container>
            <Button onClick={handleCancel}>No</Button>
            <ButtonConfirm onClick={() => handleDelete(id)}>Si</ButtonConfirm>
        </Container>
    );
}

export default FormDelete;