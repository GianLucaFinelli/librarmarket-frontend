import React from 'react';

import {
    Container,
    TableContainer,
    Header,
    H4,
    Input,
    Table,
    THead,
    TH,
    TR,
    TD,
    Button,
} from './styles';
import Info from '../assets/Info';
import Pencil from '../assets/Pencil';
import Trash from '../assets/Trash';
import { items } from './constants';

const ProductsPage = () => {
    return (
        <Container>
            <TableContainer>
                <Header>
                    <H4>Productos más vendidos</H4>
                    <Input placeholder="Buscar..."/>
                </Header>
                <Table>
                    <THead>
                        <tr>
                            <TH>Nombre</TH>
                            <TH>Categoria</TH>
                            <TH align="center">Precio</TH>
                            <TH align="center">Disponible</TH>
                            <TH>Options</TH>
                        </tr>
                    </THead>
                    <tbody>
                        {
                            items.map(item => (
                                <TR key={item.id}>
                                    <TD>{item.name}</TD>
                                    <TD>{item.category}</TD>
                                    <TD align="center">${item.price}</TD>
                                    <TD align="center">{item.available}</TD>
                                    <TD>
                                        <Button><Info/></Button>
                                        <Button><Pencil/></Button>
                                        <Button><Trash/></Button>
                                    </TD>
                                </TR>
                            ))
                        }
                    </tbody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default ProductsPage;
