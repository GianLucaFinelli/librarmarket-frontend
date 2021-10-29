import styled from 'styled-components';
import { Link as RouteLink } from 'react-router-dom';

import img from '../../assets/images/bookstore.jpg';


export const ContainerBackgroundImage =styled.div`
    height: 100vh;
    background: url('${img}') no-repeat center;
`;

export const Container = styled.div`
    z-index: 1;
    height: 100vh;
    display: flex !important;
    flex-direction: column;
    justify-content:center !important;
    align-items: center !important;
    background: rgba(0,0,0,0.9);
`;

export const Titular = styled.h2`
    display: flex;
    align-items: center;
    padding: 10px;
    font-weigth: 900;
    color: ${p => p.theme.colors['text']};
    margin-bottom: 15px;
`;

export const LoginForm = styled.div`
    display: flex;
    flex-direction: column;
    justfiy-content:center;
    align-items: center;
    padding: 30px;
    width: 500px;
    //background: ${p => p.theme.colors['light-dark']};
    background: rgba(255,255,255,0.05);
    //background: rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    // border: 1px solid rgba(255, 255, 255, 0.3);
    @media (max-width: 678px) {
        width: 70%;
    }
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    width: 100%;
`;

export const Label = styled.label`
    display: flex;
    color: ${p => p.theme.colors['text']};
    margin-bottom: 5px;
`;

export const Input = styled.input`
    border: none !important;
    padding: 10px;
    background: ${p => p.theme.colors['gray']};
    color: ${p => p.theme.colors['text']};
    border-radius: 8px;
    &:focus{
        outline:none !important;
    }
`;

export const ButtonLogin = styled(RouteLink)`
    border: none !important;
    padding: 10px 5px;
    color: ${p => p.theme.colors['text']};
    background: ${p => p.theme.colors['red']};
    border-radius: 8px;
    margin-bottom: 10px;
    cursor: pointer;
    display: block;
    transition-duration: 300ms;
    text-decoration: none;
    text-align: center;
    &:hover {
        color: ${p => p.theme.colors['light-gray-secondary']};
        background: ${p => p.theme.colors['red-secondary']};
        border-left: 5px solid ${p => p.theme.colors['red']};
    } 
`;

export const ButtonRegister = styled.button`
    border: none !important;
    padding: 10px 5px;
    background: transparent;
    border-radius: 8px;
    color: #349eeb;
    transition: 0.3s all ease;
    &:hover{
        background: #2679b5;
        color: ${p => p.theme.colors['text']};
        transition: 0.3s all ease;
        cursor: pointer;
    }
`;

export const RememberGroup = styled.div`
    margin: 15px;
    width: 90%;
    display:  flex;
    align-items: center;
    color: ${p => p.theme.colors['text']};
    font-size: 13px !important;
`;

export const RememberMe = styled.input`
    margin-right: 10px;
`;