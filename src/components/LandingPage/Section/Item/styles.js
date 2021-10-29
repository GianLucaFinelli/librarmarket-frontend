import styled from 'styled-components';

export const Product = styled.article`
    width: 205px;
    margin: 14px;
    padding: 2rem;
    text-align: center;
    border: 1px solid grey;
    background-color: #EDEDED;
`;

export const H3 = styled.h3`
    margin-bottom: 10px;
`;

export const Image = styled.img`
    width: 140px;
    height: 140px;
    object-fit: cover;
`;

export const Description = styled.p`
    margin-bottom: 5px;
    text-align: justify;
`;

export const P = styled.p`
    margin-bottom: 5px;
`;

export const Button = styled.button`
    width: 100%;
    padding: 4px 8px;
    border: 2px solid #212121;
    border-radius: 4px;
    background: transparent;
    cursor: pointer;
    font-weight: 700;
    color: black;
    transition-duration: 250ms;
    &:hover {
        color: white;
        background-color: #a6072f;
        border-color: #a6072f;
    }
    &:focus {
        outline: none;
    }
`;

export const Cantidad = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
`;

export const IconButton = styled.button`
    background: transparent;
    border: 2px solid #212121;
    width: 25px;
    height: 25px;
    border-radius: 999px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    &:focus {
        outline: none;
    }
`;

export const Span = styled.span`
    margin: 0 15px;
`;