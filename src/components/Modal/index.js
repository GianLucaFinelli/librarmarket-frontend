import React from 'react';

import {
    Overlay,
    ModalContainer,
    ModalHeader,
    H1,
    IconContainer,
    ModalBody,
} from './styles';
import Close from '../assets/Close';

const Modal = ({ show, setShow, title, children, bodyHeight }) => {
    return (
        <>
            <Overlay show={show}/>
            <ModalContainer show={show} >
                <ModalHeader>
                    <H1>{title}</H1>
                    <IconContainer
                        onClick={() => setShow(false)}
                    >
                        <Close/>
                    </IconContainer>
                </ModalHeader>
                <ModalBody bodyHeight={bodyHeight} >
                    { children }
                </ModalBody>
            </ModalContainer>
        </>
    )
}

export default Modal
