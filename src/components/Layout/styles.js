import styled from 'styled-components';

export const Main = styled.main`
    height: 100%;
    min-height: 100vh;
    color: ${p => p.theme.colors['light-gray']};
`;

export const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    min-height: 100vh;
`;

export const Section = styled.section`
    background-color: ${p => p.theme.colors['dark']};
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    width: 100%;
    margin-left: 0px;
    padding-bottom: 20px;
    transition-duration: 500ms;
    @media (min-width: 1150px) {
        margin-left: 300px;
        width: calc(100% - 300px);
    }
`;

export const Article = styled.article`
    height: 100%;
    padding: 10px 30px;
    @media (min-width: 530px) {
        padding: 10px 45px;
    }
`;