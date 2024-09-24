import styled from 'styled-components';

export const NavStyle = styled.div`
    nav {
        background-color: #333;
        padding: 10px 20px;
        display: flex;
        justify-content: center; 
    }

    .nav-link {
        color: white;
        text-decoration: none;
        margin: 0 15px;
        font-size: 16px;
        font-family: 'Roboto', sans-serif; 
    }

    .nav-link:hover {
        text-decoration: underline;
    }
`;
