import React from 'react';
import {
    Nav,
    Container,
    H2, H4, P,
    ProfileContainer,
    Image,
    Select,
    Profile,
} from './styles';

const Navbar = () => {
    return (
        <Nav>
            <Container>
                <div>
                    <H2>Dashboard</H2>
                    <P>Detailed information</P>
                </div>
                <ProfileContainer>
                    <Image src="https://res.cloudinary.com/dspswtipv/image/upload/v1629675425/Linkedin-clon/elon_musk_zqdonq.jpg"/>
                    {/* <Select>
                        <option value="profile">Perfil</option>
                        <option value="settings">Configuraciones</option>
                        <option value="signout">Cerrar sesión</option>
                    </Select> */}
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
