import React, { useState } from 'react';

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
import Modal from '../Modal';

const ProductsPage = () => {

    const [modal, setModal] = useState(true);

    return (
        <Container>
            <TableContainer>
                <Header>
                    <H4>Productos más vendidos</H4>
                    <div>
                        <Input placeholder="Buscar..."/>
                        <Button
                            color="btn-green"
                            onClick={() => setModal(true)}
                        >Agregar nuevo</Button>
                    </div>
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
                                        <Button color="btn-green"><Info/></Button>
                                        <Button color="btn-blue"><Pencil/></Button>
                                        <Button color="btn-red"><Trash/></Button>
                                    </TD>
                                </TR>
                            ))
                        }
                    </tbody>
                </Table>
            </TableContainer>
            <Modal
                show={modal}
                setShow={setModal}
                title="Nuevo Producto"
            />
        </Container>
    )
}

export default ProductsPage;
