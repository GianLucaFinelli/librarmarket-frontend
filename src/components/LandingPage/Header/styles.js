import styled from 'styled-components';
import { Link as RouteLink } from 'react-router-dom';

export const Head = styled.header`
    height: 5rem;
    background: #DA0037;
    background: -webkit-linear-gradient(to left, #DA0037, #e33b65);
    background: linear-gradient(to left, #DA0037, #e33b65);

`;

export const Container = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
`;

export const H1 = styled.h1`
    top: 1.5rem;
    width: 10rem;
    font-family: 'Bebas Neue', cursive;
`;

export const InfoContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const Button = styled(RouteLink)`
    display: flex;
    align-items: center;
    margin: 0 0.5rem;
    padding: 8px 12px;
    border: none !important;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 900;
    background: transparent;
    cursor: pointer;
    color:black;
    transition-duration: 250ms;
    text-decoration: none !important;
    &:hover {
        color: white;
        border-color: white;
    }
    &:focus {
        color: white;
        background: #FC466B;
        outline: none;
    }
`;

export const ButtonLogin = styled(RouteLink)`
    display: flex;
    align-items: center;
    margin: 0 0.5rem;
    padding: 8px 12px;
    border: none !important;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 900;
    background: #FC466B;
    cursor: pointer;
    color: white;
    transition-duration: 250ms;
    text-decoration: none !important;
    &:hover {
        color: white;
        border-color: white;
    }
    &:focus {
        color: white;
        background: #FC466B;
        outline: none;
    }
`;