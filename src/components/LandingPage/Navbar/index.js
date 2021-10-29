import React from 'react';

import {
    Nav,
    List,
    ListItem
} from './styles';

const Navbar = () => {
    return (
        <Nav>
            <List>
                <ListItem><a href="#">Productos</a></ListItem>
                <ListItem><a href="#">Categorias</a></ListItem>
                <ListItem><a href="#">Historial</a></ListItem>
            </List>
        </Nav>
    )
}

export default Navbar;
