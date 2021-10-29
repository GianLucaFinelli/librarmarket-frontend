import styled from 'styled-components';

export const Head = styled.header`
    height: 5rem;
    background-color: #DA0037;
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

`;

export const Button = styled.button`
    margin: 0 1rem;
    padding: 4px 8px;
    border: 2px solid #212121;
    border-radius: 4px;
    background: transparent;
    cursor: pointer;
    transition-duration: 250ms;
    &:hover {
        color: white;
        border-color: white;
    }
    &:focus {
        outline: none;
    }
`;