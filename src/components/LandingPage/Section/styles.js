import styled from 'styled-components';

export const SectionField = styled.section`
    width: 75%;
    display: flex;
    margin: 0 auto;
    flex-flow: wrap;
`;

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
    transition-duration: 250ms;
    &:hover {
        color: #DA0037;
        border-color: #DA0037;
    }
    &:focus {
        outline: none;
    }
`;