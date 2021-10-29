import React from 'react';

import {
    Foot,
    Container,
    Media,
    Important,
    Rights,
} from './styles';

const Footer = () => {
    return (
        <>
        <Foot>
            <Container>
                <Media>
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
