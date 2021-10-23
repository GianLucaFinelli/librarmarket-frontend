import React, { useState } from 'react';

import {
    Form,
    Group,
    Label,
    Input,
    Select,
    ButtonsContainer,
    Submit,
    Cancel,
} from './styles';

const NewProduct = ({ setShow }) => {
    
    const [values, setValues] = useState({
        name: '',
        category: '',
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
            <Group>
                <Label>Nombre del producto</Label>
                <Input
                    id="name"
                    value={values.name}
                    onChange={handleChange}
                />
            </Group>
            <Group>
                <Label>Categoria</Label>
                <Select
                    id="category"
                    onChange={handleChange}
                    value={values.category}
                >
                    <option defaultSelected value="0">Papeleria</option>
                    <option value="1">Escritura</option>
                </Select>
            </Group>
            <Group>
                <Label>Precio ($)</Label>
                <Input
                    id="price"
                    type="number"
                    value={values.price}
                    onChange={handleChange}
                />
            </Group>
            <Group>
                <Label>Disponibilidad</Label>
                <Input
                    id="available"
                    type="number"
                    value={values.available}
                    onChange={handleChange}
                />
            </Group>
            <ButtonsContainer>
                <Cancel onClick={() => setShow(false)}>Cancelar</Cancel>
                <Submit type="submit">Agregar</Submit>
            </ButtonsContainer>
        </Form>
    )
}

export default NewProduct;
