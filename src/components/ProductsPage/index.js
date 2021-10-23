import React, { useState, useEffect } from 'react';
import clientAxios from '../../config/axios';

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
import NewProduct from './NewProduct';
import { HiPlusSm, HiOutlineDotsCircleHorizontal } from 'react-icons/hi';

const ProductsPage = () => {

    const [loaded, setLoaded] = useState(false);
    const [modal, setModal] = useState(false);
    const [data, setData] = useState([]);

    // Termario
    // data.length ? console.log('true') : console.log('false')
    
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

    // POST
    // const createProduct = async () => {
    //     const product = { name: 'Hoja de calcar', precio: '40', categoria: 'papel' }
    //     const res = await clientAxios.post('create-product', product);
    //     if (res.status === 200) {
    //         setData([...data, res.data])
    //         alert('Se ha creado un producto correctamente')
    //     } else {
    //         alert(res.statusText)
    //     }
    // }

    return (
        <Container>
            <TableContainer>
                <Header>
                    <H4>Listado de Productos</H4>
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
                        >Agregar nuevo</Button>
                    </InputsContainer>
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
                            loaded ? (
                                data.length ? data.map(item => (
                                    <TR key={item.id}>
                                        <TD>{item.name}</TD>
                                        <TD>{item.category}</TD>
                                        <TD align="center">${item.price}</TD>
                                        <TD align="center">{item.available}</TD>
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
                title="Nuevo Producto"
            >
                <NewProduct setShow={setModal}/>
            </Modal>
        </Container>
    )
}

export default ProductsPage;
