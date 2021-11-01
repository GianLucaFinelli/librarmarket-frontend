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
    margin-bottom: 40px;
    font-size: 25px;
    font-family: 'Barlow Condensed', sans-serif;
`;

export const SectionContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin: 40px;
    border-radius: 10px;
    background: #DA0037;
    background: -webkit-linear-gradient(to left, #DA0037, #e33b65);
    background: linear-gradient(to left, #DA0037, #e33b65);
`;

export const H3 = styled.h3`
    // margin: 1rem;
    margin-bottom: 10px;
    font-family: 'Barlow Condensed', sans-serif;
    padding: 10px;
    background: ${p => p.theme.colors['red-secondary']};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

export const List = styled.ul`
    width: 100%;
    display: flex;
    list-style-type: none;
    flex-direction: column;
`;

export const ListItem = styled.li`
    font-family: 'Catamaran', sans-serif;
    padding: 4px 10px;
    &:hover{
        cursor: pointer;
    }
`;