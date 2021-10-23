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
import {
    Overlay,
    ModalContainer,
    ModalHeader,
    H1,
    IconContainer,
    ModalBody,
} from './styles';
import Info from '../assets/Info';
import Pencil from '../assets/Pencil';
import Trash from '../assets/Trash';
import { items } from './constants';
import Modal from '../Modal';
import SubCategoryForm from './SubCategoryForm';
import FormDelete from '../Modal/FormDelete';

const SubCategoryPage = () => {
    const [modal, setModal] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);
    const [itemSelected, setItemSelected] = useState({});
    return (
        <Container>
            <TableContainer>
                <Header>
                    <H4>Listado de subcategorias</H4>
                    <div>
                        <Input placeholder="Buscar..."/>
                        <Button
                            color="btn-green"
                            onClick={() => setModal(true)}
                        >Agregar Nueva</Button>
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
                                        <Button color="btn-red" onClick={() => {
                                            setModalDelete(true);
                                            setItemSelected(item);
                                        }}>
                                            <Trash/></Button>
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
                title="Nueva SubCategoria"
            >
                <SubCategoryForm/>
            </Modal>
            
            <Modal
                show={modalDelete}
                setShow={setModalDelete}
                title="¿Estas seguro de borrar esta subcategoria?"
            >
                <FormDelete id={itemSelected.id ?? "0"} setShow={setModalDelete} />
            </Modal>
        </Container>
    )
}

export default SubCategoryPage;
