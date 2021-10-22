import { Link as RouteLink } from 'react-router-dom';
import styled from 'styled-components';

export const Aside = styled.aside`
    width: 300px;
    height: 100%;
    background-color: ${p => p.theme.colors['light-dark']};
    display: flex;
    left: ${p => p.show ? '0px' : '-300px'};
    position: fixed;
    flex-direction: column;
    justify-content: space-between;
    transition-duration: 500ms;
    border: 1px solid ${p => p.theme.colors['border-transparency']};
    @media (min-width: 1150px) {
        left: 0;
    }
`;

export const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px 30px 20px 30px;
`;

export const PanelButton = styled.div`
    border-radius: 8px;
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
`;

export const PanelText = styled.h2`
    font-weight: 700;
    color: white;
    text-align: center;
`;

export const IconBtn = styled.button`
    display: block;
    border: none;
    cursor: pointer;
    background: transparent;
    transition-duration: 200ms;
    color: ${p => p.theme.colors['light-gray']};
    &:focus {
        outline: none;
    }
    &:hover {
        color: ${p => p.theme.colors['red']};
    }
    svg {
        width: 25px;
        height: 25px;
    }
    @media (min-width: 1150px) {
        display: none;
    }
`;

export const List = styled.ul`
    display: flex;
    list-style-type: none;
    flex-direction: column;
    padding: 40px 0 0 0;
`;

export const ListItem = styled.li`
    font-size: 22px;
    border-radius: 6px;
`;

export const Link = styled(RouteLink)`
    border-radius: 5px;
    display: block;
    color: white;
    font-weight: 500;
    font-size: 16px;
    transition-duration: 300ms;
    text-decoration: none;
    padding: 12px 8px;
    margin: 2px 0;
    &.active {
        color: ${p => p.theme.colors['light-gray']};
        background: ${p => p.theme.colors['red']};
    }
    &:hover {
        color: ${p => p.theme.colors['light-gray-secondary']};
        background: ${p => p.theme.colors['red-secondary']};
        border-left: 5px solid ${p => p.theme.colors['red']};
    } 
`;

export const Copyright = styled.div`
    color: white;
    p {
        font-size: 12px;
    }
`;