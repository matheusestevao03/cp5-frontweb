import { useRef, useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { LoginStyle } from '../css/LoginStyle';
import React from 'react';


const Login = () => {
    const usuario = useRef();
    const senha = useRef();
    const [usuarios, setUsuarios] = useState([]);
    const navigate = useNavigate();

    const validade = () => {
        return usuarios.some(user => 
            user.usuario === usuario.current.value &&
            user.senha === senha.current.value
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!usuario.current.value || !senha.current.value) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        if (validade()) {
            const token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);
            sessionStorage.setItem("usuario", usuario.current.value);
            sessionStorage.setItem("senha", token);
            navigate("/Dashboard");
        } else {
            alert("Usuário ou senha inválidos.");
        }
    };

   
    useEffect(() => {
       
        fetch("http://localhost:5000/usuarios/")
            .then((res) => res.json())
            .then((res) => {
                setUsuarios(res);
            })
            .catch((err) => console.error("Erro ao buscar usuários:", err)); // Adicionando tratamento de erro
    }, []);

    return (
        <LoginStyle>
            <section className="container">
                <div className="container-login">
                    <div className="login">
                        {              }
                        <form className="login-form" onSubmit={handleSubmit}>
                            {            }
                            <span className="titulo-login">Faça seu Login</span>
                            {               }
                            <div className="w-input">
                                <input
                                    type="text"
                                    className="input-form"
                                    id="usuario"
                                    ref={usuario}
                                    placeholder="Usuário" 
                                    required 
                                />
                            </div>
                            {             }
                            <div className="w-input">
                                <input
                                    type="password"
                                    className="input-form"
                                    id="senha"
                                    ref={senha}
                                    placeholder="Senha" 
                                    required 
                                />
                            </div>

                           
                            <div className="login-btn">
                                <button type="submit" className="login-form-btn">Login</button>
                            </div>

                           
                            <ul className="utilidades">
                                <li>
                                    <span className="text1">Esqueceu sua senha?</span>
                                </li>
                                <li>
                                    <span className="text1">Não tem conta?</span>
                                    <Link to="/cadastrarUsuario" className="text2">
                                        Criar
                                    </Link>
                                </li>
                            </ul>
                        </form>
                    </div>
                
                </div>
            </section>
        </LoginStyle>
    );
}

export default Login;
