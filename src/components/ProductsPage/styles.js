import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const TableContainer = styled.div`
    width: 100%;
    border-radius: 15px;
    padding: 10px 36px;
    border: 3px solid ${p => p.theme.colors['border']};
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const H4 = styled.h4`
    font-size: 18px;
    color: ${p => p.theme.colors['dark']};
`;

export const Input = styled.input`
    border-radius: 999px;
    padding: 8px 14px;
    width: 120px;
    color: ${p => p.theme.colors['gray']};
    border: 2px solid ${p => p.theme.colors['dark']};
    background-color: transparent;
    &:focus {
        outline: none;
    }
`;