import styled from 'styled-components';

export const ItemContainer = styled.div`
    display: flex;
    margin: 20px 0;
    flex-direction: column;
    align-items: center;
    width: 50%;
    @media (min-width: 716px) {
        width: 25%;
    }
`;

export const P = styled.p`
    text-align: center;
    font-style: italic;
    font-weight: 500;
    font-size: 20px;
    color: ${p => p.theme.colors['light-gray']};
    @media (min-width: 920px) {
        font-size: 26px;
    }
`;

export const Number = styled.h3`
    text-align: center;
    font-size: 26px;
    @media (min-width: 920px) {
        font-size: 36px;
    }
    color: ${p => p.theme.colors['light-gray']};
`;