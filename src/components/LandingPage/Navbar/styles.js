import styled from 'styled-components';

export const Nav = styled.nav`
    height: 3.5rem;
    background-color: ${p => p.theme.colors['light-dark']};
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const List = styled.ul`
    list-style-type: none;
    font-size: 1rem;
    display: flex;
`;
    
export const ListItem = styled.li`
    margin: 0 1rem;
    cursor: pointer;
    a {
        color: white;
        text-decoration: none;
        transition-duration: 250ms;
    }
    a:hover {
        color: #DA0037
    }
`;