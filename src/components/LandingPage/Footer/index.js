import React from 'react';

import {
    Foot,
    Container,
    Media,
    MediaTitle,
    IconsContainer,
    Important,
    Rights,
} from './styles';
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
    return (
        <>
        <Foot>
            <Container>
                <Media>
                    <MediaTitle>Redes sociales</MediaTitle>
                    <IconsContainer>
                        <FaFacebookF/>
                        <FaInstagram/>
                        <FaTwitter/>
                    </IconsContainer>
                </Media>
                <Important>
                    <p>Centro de ayuda</p>
                    <p>Privacidad</p>
                    <p>Contactanos</p>
                    <p>Avisos legales</p>
                    <p>Términos de uso</p>
                    <p>Información corporativa</p>
                </Important>
            </Container>
        </Foot>
        <Rights>
            <p>Prácticas Profesionalizantes II | © 2020-2021 LibrarMarket.Inc</p>
        </Rights>
        </>
    )
}

export default Footer;
