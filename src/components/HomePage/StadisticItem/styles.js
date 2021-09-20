import styled from 'styled-components';

export const ItemContainer = styled.div`
    display: flex;
    margin: 20px 0;
    width: 25%;
    flex-direction: column;
    align-items: center;
`;

export const P = styled.p`
    text-align: center;
    font-size: 26px;
    font-style: italic;
    font-weight: 500;
    color: ${p => p.theme.colors['light-gray']};
`;

export const Number = styled.h3`
    text-align: center;
    font-size: 36px;
    color: ${p => p.theme.colors['light-gray']};
`;