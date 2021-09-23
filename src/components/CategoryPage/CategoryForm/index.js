import React from 'react';

import {
    Form,
    FormGroup,
    Label,
    Input,
    FooterGroup,
    Button
} from './styles';

const CategoryForm = () => {
    return (
       <Form>
           <FormGroup>
               <Label>Nombre:</Label>
               <Input placeholder="Nombre"/>
           </FormGroup>
           <FormGroup>
               <Label>Descripción:</Label>
               <Input placeholder="Descripcion"/>
           </FormGroup>
           <FooterGroup>
               <Button>Crear Categoria</Button>
           </FooterGroup>
       </Form>
    )
}

export default CategoryForm;