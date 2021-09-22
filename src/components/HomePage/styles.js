import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Dashboard = styled.div`
    height: 180px;
    // border: 1px solid ${p => p.theme.colors['border']};
    background: ${p => p.theme.colors['light-dark-secondary']};
    border-radius: 15px;
    /* background-color: ${p => p.theme.colors['red-secondary']}; */
`;

export const BigDashboard = styled(Dashboard)`
    width: 100%;
    height: auto;
    margin-bottom: 20px;
    display: flex;
    border: 1px solid ${p => p.theme.colors['border-transparency']};
`;

export const MediumDashboard = styled(Dashboard)`
    width: 68%;
    border: 1px solid ${p => p.theme.colors['border-transparency']};
`;

export const SmallDashboard = styled(Dashboard)`
    width: 28%;
    border: 1px solid ${p => p.theme.colors['border-transparency']};
`;