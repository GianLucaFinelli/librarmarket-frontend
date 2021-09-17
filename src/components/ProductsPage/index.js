import React from 'react';

import {
    Container,
    TableContainer,
    Header,
    H4,
    Input,
} from './styles';

const ProductsPage = () => {
    return (
        <Container>
            <TableContainer>
                <Header>
                    <H4>Productos más vendidos</H4>
                    <Input placeholder="Buscar..."/>
                </Header>
            </TableContainer>
        </Container>
    )
}

export default ProductsPage;
