import styled from 'styled-components';

export const Product = styled.article`
    width: 205px;
    margin: 15px;
    padding: 2rem;
    border-radius: 10px;
    text-align: center;
    border: 1px solid ${p => p.theme.colors['border-transparency']};
    background-color: ${p => p.theme.colors['light-dark']};
    color: #FFF;
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
    border: 2px solid  ${p => p.theme.colors['red-secondary']};
    border-radius: 4px;
    background: ${p => p.theme.colors['red-secondary']};
    cursor: pointer;
    font-weight: 700;
    color: #FFF;
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