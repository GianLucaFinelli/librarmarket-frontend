import React, { useState } from 'react';

import {
    Form,
    Input,
    Select,
    ButtonsContainer,
    Submit,
    Cancel,
} from './styles';

const NewProduct = () => {
    
    const [values, setValues] = useState({
        name: '',
        categorie: '',
        price: 0,
        available: 0
    })

    const handleChange = e => {
        setValues({
            ...values,
            [e.target.id]: e.target.type === 'number' ? parseInt(e.target.value) : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
    }
    
    return (
        <Form
            onSubmit={handleSubmit}
        >
            <ButtonsContainer>
                <Cancel>Cancelar</Cancel>
                <Submit type="submit">Agregar</Submit>
            </ButtonsContainer>
        </Form>
    )
}

export default NewProduct;
