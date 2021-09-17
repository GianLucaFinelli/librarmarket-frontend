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
    justify-content: center;
`;

export const List = styled.ul`
    display: flex;
    list-style-type: none;
    flex-direction: column;
`;

export const ListItem = styled.li`
    font-size: 22px;
    padding: 5px 0px;
`;

export const Link = styled(RouteLink)`
    display: block;
    color: white;
    text-decoration: none;
`;