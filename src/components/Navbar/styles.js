import styled from 'styled-components';

export const Nav = styled.nav`
    background-color: ${p => p.theme.colors['dark']};
    padding: 16px 0;
    margin-bottom: 20px;
    width: 100%;
    // box-shadow: 10px 5px 5px black;
`;

export const Container = styled.div`
    padding: 10px 45px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const H2 = styled.h2`
    color: ${p => p.theme.colors['light-grey']};
`;

export const H4 = styled.h4`
    color: ${p => p.theme.colors['gray']};
`;

export const P = styled.p`
    font-style: italic;
    color: ${p => p.theme.colors['gray']};
`;

export const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const Image = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 999px;
    object-fit: cover;
    margin-right: 14px;
`;

export const Profile = styled.p`
    font-size: 12px;
    font-style: italic;
`;