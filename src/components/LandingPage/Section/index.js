import React from 'react';

import {
    SectionField,
} from './styles';
import Item from './Item';

const data = [
    { title: 'Carpeta A4', price: '100', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ut eveniet iste facilis dolorem tempore dignissimos. Numquam quae in officiis nisi, ratione eaque error.', cantidad: 1 },
    { title: 'Carpeta A4', price: '100', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ut eveniet iste facilis dolorem tempore dignissimos. Numquam quae in officiis nisi, ratione eaque error.', cantidad: 1 },
    { title: 'Carpeta A4', price: '100', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ut eveniet iste facilis dolorem tempore dignissimos. Numquam quae in officiis nisi, ratione eaque error.', cantidad: 1 },
    { title: 'Carpeta A4', price: '100', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ut eveniet iste facilis dolorem tempore dignissimos. Numquam quae in officiis nisi, ratione eaque error.', cantidad: 1 },
    { title: 'Carpeta A4', price: '100', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ut eveniet iste facilis dolorem tempore dignissimos. Numquam quae in officiis nisi, ratione eaque error.', cantidad: 1 },
    { title: 'Carpeta A4', price: '100', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ut eveniet iste facilis dolorem tempore dignissimos. Numquam quae in officiis nisi, ratione eaque error.', cantidad: 1 },
]

const Section = () => {
    return (
        <SectionField>
            {
                data.map((item, i) => (
                    <Item item={item} key={i}/>
                ))
            }
        </SectionField>
    )
}

export default Section;
