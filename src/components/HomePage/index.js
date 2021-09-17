import React from 'react';

import {
    Container,
    BigDashboard,
    MediumDashboard,
    SmallDashboard,
} from './styles';
import StadisticItem from './StadisticItem';

const HomePage = () => {
    return (
        <Container>
            <BigDashboard>
                <StadisticItem text="Pedidos" number="583"/>
                <StadisticItem text="Ingreso mensual" number="$28.766"/>
                <StadisticItem text="Compras stock" number="240"/>
                <StadisticItem text="Suscripciones" number="45"/>
            </BigDashboard>
            <MediumDashboard></MediumDashboard>
            <SmallDashboard></SmallDashboard>
        </Container>
    )
}

export default HomePage;
