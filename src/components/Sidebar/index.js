import React from 'react';
import { useLocation } from 'react-router-dom';

import {
    Aside,
    Container,
    PanelButton,
    PanelText,
    List,
    ListItem,
    Link,
    Copyright
} from './styles';

const Sidebar = () => {

    const location = useLocation();
    const route = location.pathname

    return (
        <Aside>
            <Container>
                <PanelButton>
                    <PanelText>Librar Market</PanelText>
                </PanelButton>
                <List>
                    <ListItem><Link className={`${route === '/admin' ? 'active' : ''}`} to="/admin">Home</Link></ListItem>
                    <ListItem><Link className={`${route === '/admin/products' ? 'active' : ''}`} to="/admin/products">Productos</Link></ListItem>
                    <ListItem><Link className={`${route === '/admin/categories' ? 'active' : ''}`} to="/admin/categories">Categorias</Link></ListItem>
                    <ListItem><Link className={`${route === '' ? 'active' : ''}`} to="#">Proveedores</Link></ListItem>
                    <ListItem><Link className={`${route === '' ? 'active' : ''}`} to="#">Comprobantes</Link></ListItem>
                    <ListItem><Link className={`${route === '' ? 'active' : ''}`} to="#">Informes</Link></ListItem>
                </List>
                <Copyright>
                    <p>soporte@librarmarket.com</p>
                </Copyright>
            </Container>
        </Aside>
    )
}

export default Sidebar;
