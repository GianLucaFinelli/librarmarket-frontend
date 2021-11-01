import styled from 'styled-components';

export const Aside = styled.aside`
    width:25%;
    height: auto;
    padding: 35px 0;
    background-color: ${p => p.theme.colors['light-dark']};
    // border: 1px solid ${p => p.theme.colors['border-transparency']};
    color: #FFF;

    @media (max-width: 678px) {
        width: 20%;
    }
`;

export const H2 = styled.h2`
    text-align: center;
    padding: 10px;
    font-size: 25px;
    font-family: 'Barlow Condensed', sans-serif;
`;

export const SectionContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    margin-bottom: 20px;
`;

export const H3 = styled.h3`
    margin: 1rem;
    font-family: 'Barlow Condensed', sans-serif;
`;

export const List = styled.ul`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    list-style-type: none;
    flex-direction: column;
`;

export const ListItem = styled.li`
    font-family: 'Catamaran', sans-serif;
`;