import React from 'react';

import {
    Aside,
    H2,
    SectionContainer,
    H3,
    List,
    ListItem,
} from './styles';

const Sidebar = () => {
    return (
        <Aside>
            <H2>Nuestras Opciones</H2>
            <SectionContainer>
                <H3>Escolar</H3>
                <List>
                    <ListItem>Carpetas</ListItem>
                    <ListItem>Cuadernos</ListItem>
                    <ListItem>Escritura</ListItem>
                    <ListItem>Papeles</ListItem>
                    <ListItem>Hojas</ListItem>
                </List>
            </SectionContainer>
            <SectionContainer>
                <H3>Regalería</H3>
                <List>
                    <ListItem>Bolsos</ListItem>
                    <ListItem>Cadenas</ListItem>
                    <ListItem>Accesorios</ListItem>
                    <ListItem>Juegos de Mesa</ListItem>
                    <ListItem>Algo mas</ListItem>
                </List>
            </SectionContainer>
            <SectionContainer>
                <H3>Arte</H3>
                <List>
                    <ListItem>Pinturas</ListItem>
                    <ListItem>Pinceles</ListItem>
                    <ListItem>Otros elementos</ListItem>
                    <ListItem>Algo mas</ListItem>
                </List>
            </SectionContainer>
            <SectionContainer>
                <H3>Otros</H3>
                <List>
                    <ListItem>Accesorios para Coser</ListItem>
                    <ListItem>Cordones</ListItem>
                    <ListItem>Telas</ListItem>
                    <ListItem>Indumentaria</ListItem>
                    <ListItem>Elementos de estética</ListItem>
                </List>
            </SectionContainer>
        </Aside>
    )
}

export default Sidebar;
