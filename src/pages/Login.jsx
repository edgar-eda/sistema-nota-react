// src/pages/Login.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import AdminPanel from "./AdminPanel";


export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;

      // Redirecionar para painel com base no email (exemplo: admin@... vai para admin)
      if (user.email === "admin@admin.com") {
        navigate("/admin");
      } else {
        navigate("/usuario");
      }
    } catch (error) {
      alert("Erro ao fazer login: " + error.message);
    }
  };

  return (
    <div className="container d-flex vh-100 justify-content-center align-items-center bg-light">
      <div className="card shadow-sm p-4 w-100" style={{ maxWidth: "400px" }}>
        <div className="text-center mb-4">
          <i className="bi bi-shield-lock-fill text-primary" style={{ fontSize: "3rem" }}></i>
          <h4 className="mt-2">Acesso ao Sistema</h4>
          <p className="text-muted small mb-0">Prestação de Contas</p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">E-mail</label>
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-envelope"></i></span>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="senha" className="form-label">Senha</label>
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-lock"></i></span>
              <input
                type="password"
                className="form-control"
                id="senha"
                placeholder="••••••••"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-100 mt-2">
            <i className="bi bi-box-arrow-in-right me-2"></i>Entrar
          </button>
        </form>
          <footer class="text-center text-muted py-3">
          <small>Desenvolvido por Edgar Tavares</small>
        </footer>
       
      </div>
      
    </div>

    
  );
}
