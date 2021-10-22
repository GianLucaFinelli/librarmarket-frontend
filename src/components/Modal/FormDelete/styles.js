import styled from 'styled-components';

export const Container = styled.div`
    width: 95%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
`;

export const Button = styled.button`
    border-radius: 8px;
    padding: 10px 16px;
    width: 40%;
    text-align: center;
    border: none;
    color: white;
    background:${p => p.theme.colors['gray']};
    cursor: pointer;
`;

export const ButtonConfirm = styled.button`
    border-radius: 8px;
    padding: 10px 16px;
    width: 40%;
    text-align: center;
    border: none;
    color: white;
    background:${p => p.theme.colors['btn-green']};
    cursor: pointer;
`;