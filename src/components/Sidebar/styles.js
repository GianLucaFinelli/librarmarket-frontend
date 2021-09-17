import { Link as RouteLink } from 'react-router-dom';
import styled from 'styled-components';

export const Aside = styled.aside`
    width: 20%;
    padding: 20px 10px 20px 36px;
    background-color: ${p => p.theme.colors['dark']};
`;

export const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const PanelButton = styled.div`
    background-color: ${p => p.theme.colors['red']};
    border-radius: 8px;
    width: 100%;
    padding: 10px 0;
`;

export const PanelText = styled.h2`
    font-weight: 700;
    color: white;
    text-align: center;
`;

export const List = styled.ul`
    display: flex;
    list-style-type: none;
    flex-direction: column;
`;

export const ListItem = styled.li`
    font-size: 22px;
    padding: 12px 0px;
`;

export const Link = styled(RouteLink)`
    display: block;
    color: white;
    font-weight: 500;
    font-size: 26px;
    transition-duration: 300ms;
    text-decoration: none;
    &.active {
        color: ${p => p.theme.colors['red']};
    }
    &:hover {
        color: ${p => p.theme.colors['red']};
    } 
`;

export const Copyright = styled.div`
    color: white;
    p {
        font-size: 12px;
    }
`;