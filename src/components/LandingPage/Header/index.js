import React from 'react';

import {
    Head,
    Container,
    H1,
    InfoContainer,
    Button,
} from './styles';

import { FaShoppingCart, FaAssistiveListeningSystems, FaLanguage } from 'react-icons/fa';

const Header = () => {

    const style = { marginRight: '10px' }

    return (
        <Head>
            <Container>
                <H1>LibrarMarket</H1>
                <InfoContainer>
                    <Button><FaShoppingCart style={style}/>Carrito</Button>
                    <Button><FaAssistiveListeningSystems style={style}/>Asistencia</Button>
                    <Button><FaLanguage style={style}/>Lenguaje</Button>
                </InfoContainer>
            </Container>
        </Head>
    )
}

export default Header
