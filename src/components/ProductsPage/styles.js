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
    margin-bottom: 20px;
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
    padding: 6px;
    color: ${p => p.theme.colors['light-gray']};
    text-align: ${p => p.align ? p.align : 'left'};
`;

export const TR = styled.tr`
    border-bottom: 1px solid ${p => p.theme.colors['dark']};
    &:last-child {
        border: none;
    }
`;

export const TD = styled.td`
    padding: 10px 6px;
    text-align: ${p => p.align ? p.align : 'left'};
`;

export const Button = styled.button`
    border-radius: 7px;
    border: none;
    color: white;
    padding: 6px 8px;
    margin-right: 5px;
    background-color: red;
    cursor: pointer;
    &:nth-child(1){ background-color: #2bf035; }
    &:nth-child(2){ background-color: #2b8af0; }
    &:nth-child(3){ background-color: #f01d20; }
    &:focus {
        outline: none;
    }
`;