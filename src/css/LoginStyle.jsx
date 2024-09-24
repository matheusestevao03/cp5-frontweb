import styled from 'styled-components';

export const LoginStyle = styled.div`
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh; /* Faz a altura da seção ocupar 100% da viewport */
        background-color: #f0f0f0; /* Cor de fundo suave */
    }

    .container-login {
        background: white;
        padding: 40px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); 
        width: 400px; 
    }

    .titulo-login {
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center; 
    color: #333; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    height: 50px; 
}


    .w-input {
        margin-bottom: 15px; /* Espaço entre os campos */
        position: relative; /* Necessário para posicionar o placeholder */
    }

    .input-form {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 16px;
    }

    .input-form:focus {
        border-color: #007BFF; 
        outline: none; 
    }

    .login-btn {
        text-align: center; 
        margin-top: 20px; /* Adicionando espaço acima do botão */
    }

    .login-form-btn {
        background-color: #007BFF; /* Cor do botão */
        color: black; /* Cor do texto do botão */
        padding: 10px 20px;
        border: none;
        border-radius: 4px; /* Bordas arredondadas */
        cursor: pointer;
        font-size: 16px;
        transition: background-color 0.3s; /* Transição suave */
        font-family: Arial, sans-serif; /* Mudar a fonte do botão */
    }

    .login-form-btn:hover {
        background-color: #0056b3; /* Cor ao passar o mouse */
    }

    .utilidades {
        list-style: none;
        padding: 0;
        margin-top: 20px; /* Espaço acima da lista */
        text-align: center; /* Centraliza a lista */
    }

    .text1 {
        margin-right: 5px; /* Espaço entre o texto e o link */
        color: #666; /* Cor do texto */
    }

    .text2 {
        color: #007BFF; /* Cor do link */
        text-decoration: none; /* Remove o sublinhado */
    }

    .text2:hover {
        text-decoration: underline; /* Sublinha ao passar o mouse */
    }
`;

      
