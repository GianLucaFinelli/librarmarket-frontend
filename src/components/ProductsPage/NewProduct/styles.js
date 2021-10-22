import styled from 'styled-components';

export const Form = styled.form`
    padding 15px 20px;
`;

export const Input = styled.input`
    &:focus {
        outline: none;
    }
`;

export const Select = styled.select`
    &:focus {
        outline: none;
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: end;
`;

export const Submit = styled.button`
    border: none;
    width: 90px;
    height: 32px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    color: ${p => p.theme.colors['light-gray']};
    background: ${p => p.theme.colors['btn-green']};
    &:focus {
        outline: none;
    }
`;

export const Cancel = styled.button`
    margin-right: 6px;
    border: none;
    width: 90px;
    height: 32px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    color: ${p => p.theme.colors['light-gray']};
    background: ${p => p.theme.colors['btn-red']};
    &:focus {
        outline: none;
    }
`;