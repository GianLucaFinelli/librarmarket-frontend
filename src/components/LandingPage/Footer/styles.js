import styled from 'styled-components';

export const Foot = styled.footer`
    background: #DA0037;
    background: -webkit-linear-gradient(to left, #DA0037, #e33b65);
    background: linear-gradient(to left, #DA0037, #e33b65);
    color: #FCF9F9;
    padding: 30px 0;
    `;
    
export const Container = styled.div`
    width: 90%;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
`;

export const Media = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    svg {
        width: 30px;
        height: 30px;
        margin-right: 15px;
    }
`;

export const MediaTitle = styled.h3`
    color: white;
    margin-top: 0;
    margin-bottom: 20px;
`;

export const IconsContainer = styled.div`
    display: flex;
    align-items: flex-end;
`;

export const Important = styled.div`
    text-align: right;
    width: 50%;
`;

export const Rights = styled.div`
    width: 100%;
    text-align: center;
    color: white;
    background: #DA0037;
    background: -webkit-linear-gradient(to left, #e33b65, #824e96);
    background: linear-gradient(to left, #e33b65, #824e96);
    padding: 9px 0;
`;
