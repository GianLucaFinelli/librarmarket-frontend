import React from 'react';

import {
    Container,
    BigDashboard,
    MediumDashboard,
    SmallDashboard,
} from './styles';

const HomePage = () => {
    return (
        <Container>
            <BigDashboard></BigDashboard>
            <MediumDashboard></MediumDashboard>
            <SmallDashboard></SmallDashboard>
        </Container>
    )
}

export default HomePage;
