import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Dashboard = styled.div`
    height: 180px;
    border: 5px solid #bfbfbf;
    border-radius: 15px;
    /* background-color: ${p => p.theme.colors['red']}; */
`;

export const BigDashboard = styled(Dashboard)`
    width: 100%;
    margin-bottom: 20px;
`;

export const MediumDashboard = styled(Dashboard)`
    width: 68%;
`;

export const SmallDashboard = styled(Dashboard)`
    width: 28%;
`;