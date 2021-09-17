import styled from 'styled-components';

export const Main = styled.main`
    height: 100%;
`;

export const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
`; 

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 80%;
`;

export const Article = styled.article`
    background-color: ${p => p.theme.colors['light-gray']};
    height: 100%;
    padding: 10px 25px;
`;