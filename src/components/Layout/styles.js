import styled from 'styled-components';

export const Main = styled.main`
    height: 100%;
    color: ${p => p.theme.colors['light-gray']};
`;

export const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
`; 

export const Section = styled.section`
    background-color: ${p => p.theme.colors['dark']};
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 85%;
    box-sizing: border-box;
`;

export const Article = styled.article`
    height: 100%;
    padding: 10px 45px;
`;