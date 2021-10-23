import React, { useState, useEffect } from 'react';

import {
    Container,
    TableContainer,
    Header,
    InputsContainer,
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
import NewSubcategory from './NewSubcategory';
import FormDelete from '../Modal/FormDelete';
import { HiPlusSm, HiOutlineDotsCircleHorizontal } from 'react-icons/hi';

const SubCategoryPage = () => {

    const [loaded, setLoaded] = useState(false);
    const [modal, setModal] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);
    const [data, setData] = useState([]);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        if (!loaded) {
            fetchData();
        }
    }, [data])

    const fetchData = async () => {
        // const res = await clientAxios.get('get-products');
        // setTimeout(() => {
            setData(items);
            setLoaded(true);
        // }, 1000)
    }

    return (
        <Container>
            <TableContainer>
                <Header>
                    <H4>Listado de subcategorias</H4>
                    <InputsContainer>
                        <Input placeholder="Buscar..."/>
                        <Button
                            id="new_mobile"
                            color="btn-green"
                            onClick={() => setModal(true)}
                        ><HiPlusSm/></Button>
                        <Button
                            id="new_desktop"
                            color="btn-green"
                            onClick={() => setModal(true)}
                        >Agregar nueva</Button>
                    </InputsContainer>
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
                            loaded ? (
                                data.length ? data.map(item => (
                                    <TR key={item.id}>
                                        <TD>{item.nombre}</TD>
                                        <TD>{item.descripcion}</TD>
                                        <TD className="options">
                                            <Button className="desktop" color="btn-green"><Info/></Button>
                                            <Button className="desktop" color="btn-blue"><Pencil/></Button>
                                            <Button className="desktop" color="btn-red" onClick={() => {
                                                setModalDelete(true);
                                                setSelected(item.id);
                                            }}>
                                            <Trash/></Button>
                                            <Button className="mobile" color="btn-options"><HiOutlineDotsCircleHorizontal/></Button>
                                        </TD>
                                    </TR>
                                )) : <TR>
                                    <TD colSpan="3">No hay productos que mostrar.</TD>
                                </TR>
                            ) : <TR>
                            <TD colSpan="3">Cargando productos...</TD>
                        </TR>
                        }
                    </tbody>
                </Table>
            </TableContainer>
            <Modal
                show={modal}
                setShow={setModal}
                title="Nueva SubCategoria"
            >
                <NewSubcategory setShow={setModal}/>
            </Modal>
            
            <Modal
                show={modalDelete}
                setShow={setModalDelete}
                title="¿Estas seguro de borrar esta subcategoria?"
            >
                <FormDelete
                    id={selected}
                    setShow={setModalDelete}
                    setSelected={setSelected}
                />
            </Modal>
        </Container>
    )
}

export default SubCategoryPage;
