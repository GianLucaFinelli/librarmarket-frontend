import React from 'react';

import {
    Head,
    Container,
    H1,
    InfoContainer,
    Button,
} from './styles';

const Header = () => {
    return (
        <Head>
            <Container>
                <H1>LibrarMarket</H1>
                <InfoContainer>
                    <Button>Carrito</Button>
                    <Button>Asistencia</Button>
                    <Button>Lenguaje</Button>
                </InfoContainer>
            </Container>
        </Head>
    )
}

export default Header
