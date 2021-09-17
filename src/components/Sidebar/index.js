import React from 'react';

import {
    Aside,
    Container,
    List,
    ListItem,
    Link
} from './styles';

const Sidebar = () => {
    return (
        <Aside>
            <Container>
                <List>
                    <ListItem><Link to="/admin/products">Productos</Link></ListItem>
                    <ListItem><Link to="/admin/categories">Categorias</Link></ListItem>
                    <ListItem><Link to="#">Proveedores</Link></ListItem>
                    <ListItem><Link to="#">Comprobantes</Link></ListItem>
                    <ListItem><Link to="#">Informes</Link></ListItem>
                </List>
            </Container>
        </Aside>
    )
}

export default Sidebar;
