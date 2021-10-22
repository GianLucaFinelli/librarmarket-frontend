import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

import {
    Main,
    MainContainer,
    Section,
    Article,
} from './styles';

const Layout = ({ children, text }) => {

    // Used for responsive sidebar
    const [show, setShow] = useState(true);

    return (
        <Main>
            <MainContainer>
                <Sidebar
                    show={show}
                    setShow={setShow}
                />
                <Section>
                    <Navbar
                        text={text}
                        show={show}
                        setShow={setShow}
                    />
                    <Article>
                        { children }
                    </Article>
                </Section>
            </MainContainer>
        </Main>
    )
}

export default Layout;
