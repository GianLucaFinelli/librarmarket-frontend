import React from 'react';

import {
    Head,
    Container,
    H1,
    InfoContainer,
    Button,
    ButtonLogin
} from './styles';

import { FaShoppingCart, FaAssistiveListeningSystems, FaLanguage } from 'react-icons/fa';
import { MdLogin } from "react-icons/md";

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
                    <ButtonLogin to="/login"><MdLogin style={style}/>Log in</ButtonLogin>
                </InfoContainer>
            </Container>
        </Head>
    )
}

export default Header
