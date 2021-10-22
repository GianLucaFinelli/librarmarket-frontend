import styled from 'styled-components';

export const Nav = styled.nav`
    background-color: ${p => p.theme.colors['dark']};
    padding: 16px 0;
    margin-bottom: 20px;
    width: 100%;
    // box-shadow: 10px 5px 5px black;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 30px;
    @media (min-width: 530px) {
        padding: 10px 45px;
    }
`;

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    svg {
        width: 30px;
        height: 30px;
        margin-right: 15px;
    }
`;

export const BurgerBtn = styled.button`
    display: block;
    border: none;
    cursor: pointer;
    background: transparent;
    transition-duration: 200ms;
    color: ${p => p.theme.colors['light-gray']};
    &:focus {
        outline: none;
    }
    &:hover {
        color: ${p => p.theme.colors['red']};
    }
    @media (min-width: 1150px) {
        display: none;
    }
`;

export const H2 = styled.h2`
    color: ${p => p.theme.colors['light-gray']};
    font-size: 20px;
    @media (min-width: 530px) {
        font-size: 27px;
    }
`;

export const H4 = styled.h4`
    color: ${p => p.theme.colors['gray']};
`;

export const P = styled.p`
    font-style: italic;
    margin-top: 4px;
    color: ${p => p.theme.colors['gray']};
    font-size: 14px;
    @media (min-width: 530px) {
        font-size: 16px;
    }
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