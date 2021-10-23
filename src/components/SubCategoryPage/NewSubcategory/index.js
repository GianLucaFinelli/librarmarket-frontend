import React, { useState } from 'react';

import {
    Form,
    Group,
    Label,
    Input,
    ButtonsContainer,
    Submit,
    Cancel,
} from './styles';

const NewSubcategory = ({ setShow }) => {

    const [values, setValues] = useState({
        name: '',
        description: '',
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
        <Form onSubmit={handleSubmit}>
            <Group>
                <Label>Nombre:</Label>
                <Input value={values.name} onChange={handleChange}/>
            </Group>
            <Group>
                <Label>Descripción:</Label>
                <Input value={values.description} onChange={handleChange}/>
            </Group>
            <ButtonsContainer>
                <Cancel onClick={() => setShow(false)}>Cancelar</Cancel>
                <Submit type="submit">Agregar</Submit>
            </ButtonsContainer>
        </Form>
    )
}

export default NewSubcategory;