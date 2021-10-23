import styled from 'styled-components';

export const Form = styled.form`
    padding 15px 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const Group = styled.div`
    width: 47%;
    margin-bottom: 15px;
`;

export const Label = styled.label`
    display: block;
    font-weight: 600;
    margin-bottom: 4px;
    color: ${p => p.theme.colors['light-gray-secondary']};
`;

export const Input = styled.input`
    width: calc(100% - 16px);
    border-radius: 6px;
    padding: 8px 6px;
    background: transparent;
    color: ${p => p.theme.colors['light-gray-secondary']};
    border: 2px solid ${p => p.theme.colors['light-gray-secondary']};
    &:focus {
        outline: none;
        border-color: ${p => p.theme.colors['red']};
    }
`;

export const Select = styled.select`
    width: 100%;
    border-radius: 6px;
    padding: 8px 6px;
    background: transparent;
    color: ${p => p.theme.colors['light-gray-secondary']};
    border: 2px solid ${p => p.theme.colors['light-gray-secondary']};
    &:focus {
        outline: none;
        border-color: ${p => p.theme.colors['red']};
    }
`;

export const ButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    margin-top: 30px;
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
    cursor: pointer;
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
    cursor: pointer;
    color: ${p => p.theme.colors['light-gray']};
    background: ${p => p.theme.colors['btn-red']};
    &:focus {
        outline: none;
    }
`;