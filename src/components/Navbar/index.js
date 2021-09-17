import React from 'react';
import {
    Nav,
    Container,
    H2, H4, P,
    ProfileContainer,
    Image,
    Profile,
} from './styles';

const Navbar = ({ text }) => {
    return (
        <Nav>
            <Container>
                <div>
                    <H2>Dashboard</H2>
                    <P>{text}</P>
                </div>
                <ProfileContainer>
                    <Image src="https://res.cloudinary.com/dspswtipv/image/upload/v1629675425/Linkedin-clon/elon_musk_zqdonq.jpg"/>
                    <div>
                        <H4>Elon Musk</H4>
                        <Profile>Administrador</Profile>
                    </div>
                </ProfileContainer>
            </Container>
        </Nav>
    )
}

export default Navbar
