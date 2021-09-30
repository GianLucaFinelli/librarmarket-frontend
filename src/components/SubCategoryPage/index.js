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
import SubCategoryForm from './SubCategoryForm';

const SubCategoryPage = () => {
    const [modal, setModal] = useState(false);
    return (
        <Container>
            <TableContainer>
                <Header>
                    <H4>Todas las SubCategorias</H4>
                    <div>
                        <Button 
                            color="btn-red"
                            onClick={()=>setModal(true)}
                            >Eliminar Subcategoria</Button>
                    </div>
                    <div>
                        <Input placeholder="Buscar..."/>
                        <Button
                            color="btn-green"
                            onClick={() => setModal(true)}
                        >Agregar nueva SubCategoria</Button>
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
                title="Nueva SubCategoria"
            >
                <SubCategoryForm/>
            </Modal>
        </Container>
    )
}

export default SubCategoryPage;
