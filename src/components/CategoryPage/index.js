import React, { useState, useEffect } from 'react';
import { usePagination } from '../../hooks/usePagination';

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
import NewCategory from './NewCategory';
import { HiPlusSm, HiOutlineDotsCircleHorizontal } from 'react-icons/hi';

const CategoryPage = () => {

    const [loaded, setLoaded] = useState(false);
    const [modal, setModal] = useState(false);
    const [data, setData] = useState([]);

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
                    <H4>Todas las Categorias</H4>
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
                                            <Button className="desktop" color="btn-red"><Trash/></Button>
                                            <Button className="mobile" color="btn-options"><HiOutlineDotsCircleHorizontal/></Button>
                                        </TD>
                                    </TR>
                                )) : <TR>
                                    <TD colSpan="5">No hay productos que mostrar.</TD>
                                </TR>
                            ) : <TR>
                            <TD colSpan="5">Cargando productos...</TD>
                        </TR>
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
