import React, { useState } from 'react';

import {
    Product,
    H3,
    Image,
    P,
    Description,
    Button,
    Cantidad,
    IconButton,
    Span,
} from './styles';
import Books from '../../../assets/books.jpeg';
import { FaCaretUp, FaCaretDown } from 'react-icons/fa';

const Item = ({ item }) => {

    const [count, setCount] = useState(item.cantidad);

    const handleChange = value => {
        if(count + value === 0) return;
        setCount(count + value);
    }

    return (
        <Product>
            <H3>{item.title}</H3>
            <Image src={Books}/>
            <P>$ {item.price}</P>
            <Description>{item.description}</Description>
            <Cantidad>
                <IconButton onClick={() => handleChange(-1)}><FaCaretDown/></IconButton>
                <Span>{ count }</Span>
                <IconButton onClick={() => handleChange(1)}><FaCaretUp/></IconButton>
            </Cantidad>
            <Button>Comprar</Button>
        </Product>
    )
}

export default Item;
