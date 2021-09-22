import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const TableContainer = styled.div`
    width: 100%;
    border-radius: 8px;
    padding: 10px 16px;
    // border: 1px solid ${p => p.theme.colors['light-gray']};
    background: ${p => p.theme.colors['light-dark-secondary']};
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`;

export const H4 = styled.h4`
    font-size: 18px;
    color: ${p => p.theme.colors['light-gray']};
`;

export const Input = styled.input`
    border-radius: 999px;
    padding: 8px 14px;
    width: 120px;
    margin-right: 10px;
    color: ${p => p.theme.colors['light-gray']};
    // border: 1px solid ${p => p.theme.colors['grey']};
    border: none !important;
    background-color: ${p => p.theme.colors['light-dark']};
    &:focus {
        outline: none;
    }
`;

export const Table = styled.table`
    width: 100%;
    margin-bottom: 20px;
    border-collapse: collapse;
`;

export const THead = styled.thead`
    background-color: ${p => p.theme.colors['red']};
`;

export const TH = styled.th`
    font-weight: 700;
    text-align: left;
    padding: 8px;
    color: ${p => p.theme.colors['light-gray']};
    text-align: ${p => p.align ? p.align : 'left'};
`;

export const TR = styled.tr`
    font-size: 14px;
    // border-bottom: 1px solid ${p => p.theme.colors['dark']};
    &:last-child {
        border: none;
    }
    &:nth-child(odd) {background: ${p => p.theme.colors['light-dark']}; }
`;

export const TD = styled.td`
    padding: 5px;
    text-align: ${p => p.align ? p.align : 'left'};
`;

export const Button = styled.button`
    border-radius: 5px;
    border: none;
    color: white;
    padding: 6px;
    margin-right: 8px;
    background-color: red;
    cursor: pointer;
    font-weight: bold;
    background-color: ${p => p.theme.colors[p.color]};
    &:focus {
        outline: none;
    }
`;