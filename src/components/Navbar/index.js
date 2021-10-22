import React from 'react';
import {
    Nav,
    Container,
    TitleContainer,
    BurgerBtn,
    H2, H4, P,
    ProfileContainer,
    Image,
    Profile,
} from './styles';
import { HiMenu } from 'react-icons/hi';

const Navbar = ({ text, show, setShow }) => {
    return (
        <Nav>
            <Container>
                <TitleContainer>
                    <BurgerBtn
                        onClick={() => setShow(!show)}
                    >
                        <HiMenu/>
                    </BurgerBtn>
                    <div>
                        <H2>Dashboard</H2>
                        <P>{text}</P>
                    </div>
                </TitleContainer>
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
