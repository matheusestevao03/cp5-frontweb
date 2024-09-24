import styled from 'styled-components';

export const HomeStyle = styled.section`
    @import url('https://fonts.googleapis.com/css2?family=Jacquarda+Bastarda+9&display=swap');

   
   header {
        text-align: center;
        padding: 20px;
        background: linear-gradient(to bottom, #000000, #808080);
        font-family: 'Jacquarda Bastarda 9', sans-serif;
    }

    .products {
        display: flex; 
        flex-direction: column; 
        align-items: center; 
        padding: 20px;
        background: linear-gradient(to bottom, #000000, #808080);
        font-family: 'Jacquarda Bastarda 9', sans-serif;
    }

    .product-list {
        display: flex;
        justify-content: center; 
        flex-wrap: wrap;
        max-width: 1200px; 
        width: 100%;
    }

    .product {
        border: 1px solid #ccc;
        padding: 10px;
        margin: 10px;
        flex-basis: 30%;
        text-align: center;
        font-family: 'Jacquarda Bastarda 9', sans-serif;
    }

    header {
        text-align: center;
        padding: 20px;
        background-color: #f5f5f5;
        font-family: 'Jacquarda Bastarda 9', sans-serif;
    }

    .logo {
        width: 100px; 
        margin-bottom: 20px; 
    }

    .products {
        padding: 20px;
        text-align: center; 
    }

    .product-list {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        margin-top: 20px; 
    }

    .product {
        border: 1px solid #ccc;
        padding: 10px;
        margin: 10px;
        flex-basis: 30%;
        text-align: center;
        border-radius: 8px; 
        background-color: #ffffff; 
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 
    }

    .product-image {
        width: 100%;
        height: auto; 
        border-radius: 4px; 
        margin-bottom: 10px; 
    }
`;
