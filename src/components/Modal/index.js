import React from 'react';

import {
    Overlay,
    ModalContainer,
    ModalHeader,
    H1,
    IconContainer,
} from './styles';
import Close from '../assets/Close';

const Modal = ({ show, setShow, title }) => {
    return (
        <>
            <Overlay show={show}/>
            <ModalContainer show={show}>
                <ModalHeader>
                    <H1>{title}</H1>
                    <IconContainer
                        onClick={() => setShow(false)}
                    >
                        <Close/>
                    </IconContainer>
                </ModalHeader>
            </ModalContainer>
        </>
    )
}

export default Modal
