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
    border: 1px solid ${p => p.theme.colors['border-transparency']};
    background: ${p => p.theme.colors['light-dark-secondary']};
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`;

export const InputsContainer = styled.div`
    display: flex;
`;

export const H4 = styled.h4`
    font-size: 16px;
    color: ${p => p.theme.colors['light-gray']};
    @media (min-width: 530px) {
        font-size: 18px;
    }
`;

export const Input = styled.input`
    border-radius: 999px;
    padding: 8px 14px;
    width: 120px;
    margin-right: 10px;
    color: ${p => p.theme.colors['light-gray']};
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
    padding: 6px 5px;
    font-size: 14px;
    color: ${p => p.theme.colors['light-gray']};
    text-align: ${p => p.align ? p.align : 'left'};
    @media (min-width: 600px) {
        padding: 8px;
    }
`;

export const TR = styled.tr`
    font-size: 14px;
    &:last-child {
        border: none;
    }
    &:nth-child(odd) {background: ${p => p.theme.colors['light-dark']}; }
`;

export const TD = styled.td`
    padding: 5px;
    text-align: ${p => p.align ? p.align : 'left'};
    &.options {
        display: flex;
        justify-content: center;
    }
    @media (min-width: 600px) {
        &.options {
            justify-content: start;
        }
    }
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
    &#new_mobile { display: block; }
    &#new_desktop { display: none; }
    &#new_mobile svg {
        width: 20px;
        height: 20px;
    }
    &.mobile svg {
        width: 18px;
        height: 18px;
    }
    &.desktop { display: none; }
    &.mobile { display: block; }
    @media (min-width: 686px) {
        &#new_mobile { display: none; }
        &#new_desktop { display: block; }
        &.desktop { display: inline; }
        &.mobile { display: none; }
    }
    &:focus {
        outline: none;
    }
`;