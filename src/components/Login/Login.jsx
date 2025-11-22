import { FaLock, FaUser } from "react-icons/fa";
import { useState } from "react";
import "./Login.css";

// Componente de login
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Lógica para autenticação pode ser adicionada aqui
  const handleLogin = (event) => {
    event.preventDefault();
  };
  // JSX do componente de login
  return (
    <div className="container">
      <form onSubmit={handleLogin}>
        <h1>Acesse o sistema</h1>

        {/* Espaço para o campo de e-mail */}
        <div>
          <input
            type="email"
            value={email}
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <FaUser className="icon" />
        </div>
        {/* Espaço para o campo de senha */}
        <div>
          <input
            type="password"
            value={password}
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>

        <div>
          <div className="recall-forget">
            <label>
              <input type="checkbox" /> Lembrar-me
            </label>
            <a href="">Esqueceu a senha?</a>
          </div>

          <div className="singup-link">
            Não tem uma conta? <a href="#">Cadastre-se</a>
          </div>
          <button type="submit">Entrar</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
