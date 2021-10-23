import React, { useState } from 'react';
import { usePagination } from '../../hooks/usePagination';

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
import NewCategory from './NewCategory';

const CategoryPage = () => {

    const [modal, setModal] = useState(false);

    return (
        <Container>
            <TableContainer>
                <Header>
                    <H4>Todas las Categorias</H4>
                    <div>
                        <Input placeholder="Buscar..."/>
                        <Button
                            color="btn-green"
                            onClick={() => setModal(true)}
                        >Agregar nueva Categoria</Button>
                    </div>
                </Header>
                <Table>
                    <THead>
                        <tr>
                            <TH>Nombre</TH>
                            <TH>Descripcion</TH>
                            <TH>Options</TH>
                        </tr>
                    </THead>
                    <tbody>
                        {
                            items.map(item => (
                                <TR key={item.id}>
                                    <TD>{item.nombre}</TD>
                                    <TD>{item.descripcion}</TD>
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
                title="Nueva Categoria"
            >
                <NewCategory setShow={setModal}/>
            </Modal>
        </Container>
    )
}

export default CategoryPage;
