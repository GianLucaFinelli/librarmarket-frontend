import styled from 'styled-components';

export const Overlay = styled.div`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    opacity: 0.80;
    z-index: 999;
    display: ${p => p.show ? 'block' : 'none'};
    background-color: ${p => p.theme.colors['dark']};
`;

export const ModalContainer = styled.section`
    left: 50%;
    height: auto;
    z-index: 1000;
    display: flex;
    position: absolute;
    border-radius: 10px;
    flex-direction: column;
    transform: translateX(-50%);
    display: ${p => p.show ? 'block' : 'none'};
    background-color: ${p => p.theme.colors['light-dark']};
    border: 1px solid ${p => p.theme.colors['border-transparency']};
    width: 80%;
    @media (min-width: 520px) {
        width: 470px;
    }
    @media (min-width: 600px) {
        width: 476px;
    }
    @media (min-width: 686px) {
        width: 540px;
    }
    @media (min-width: 716px) {
        width: 600px;
    }
    @media (min-width: 920px) {
        width: 620px;
    }
    @media (min-width: 1150px) {
        width: 640px;
    }
`;

export const ModalHeader = styled.header`
    width: 100%;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${p => p.theme.colors['border-transparency']};
`;

export const ModalBody = styled.div`
    padding: 10px;
`;

export const H1 = styled.h1`
    color: white;
    font-size: 20px;
    margin-left: 24px;
`;

export const IconContainer = styled.div`
    margin-right: 24px;
    cursor: pointer;
    transition-duration: 200ms;
    &:hover {
        color: ${p => p.theme.colors['red']};
    }
`;