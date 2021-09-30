import styled from 'styled-components';

export const Form = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FormGroup = styled.div`
    width: 90%;
    display:flex;
    justify-content: center;
    flex-direction: column;
`;

export const Label = styled.label`
    display:flex;
    color: ${p => p.theme.colors['light-gray']};
    margin-top: 10px;
    margin-bottom: 5px;
`;

export const Input = styled.input`
    display:flex;
    border-radius: 5px;
    padding: 8px 8px;
    width: auto;
    color: ${p => p.theme.colors['light-gray']};
    // border: 1px solid ${p => p.theme.colors['grey']};
    border: none !important;
    background-color: ${p => p.theme.colors['light-dark-secondary']};
    &:focus {
        outline: none;
    }
`;

export const FooterGroup = styled.div`
    widtth: 100%;
    display:flex;
    justify-content: flex-end;
    margin-top: 30px;
`;

export const Button = styled.button`
    border-radius: 5px;
    padding: 10px 16px;
    color: ${p => p.theme.colors['light-gray']};
    background: ${p => p.theme.colors['red']};
    border: none;
    cursor: pointer;
    font-size: 15px;
`;