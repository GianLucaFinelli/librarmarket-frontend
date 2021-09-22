import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    width: 22px;
    height: 22px;
`;

const Close = () => (
    <SVG xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </SVG>
)

export default Close;
