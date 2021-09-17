import React from 'react';

import {
    ItemContainer,
    P,
    Number,
} from './styles';

const StadisticItem = ({ text, number }) => {
    return (
        <ItemContainer>
            <P>{text}</P>
            <Number>{number}</Number>
        </ItemContainer>
    )
}

export default StadisticItem;
