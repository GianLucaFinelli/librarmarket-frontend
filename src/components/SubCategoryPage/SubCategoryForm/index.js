import React from 'react';

import {
    Form,
    FormGroup,
    Label,
    Input,
    FooterGroup,
    Button
} from './styles';

const SubCategoryForm = () => {
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
               <Button>Crear SubCategoria</Button>
           </FooterGroup>
       </Form>
    )
}

export default SubCategoryForm;