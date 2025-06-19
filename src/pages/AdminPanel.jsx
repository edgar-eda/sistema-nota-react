// src/pages/AdminPanel.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const AdminPanel = () => {
  const navigate = useNavigate();
  
    const handleLogout = async () => {
      try {
        await signOut(auth);
        navigate("/");
      } catch (error) {
        alert("Erro ao sair: " + error.message);
      }
    };
  return (
    <div className="bg-gradient min-vh-100">
      {/* Header */}
      <header className="bg-white shadow-sm p-3 mb-4 d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Painel do Administrador</h5>
        <button className="btn btn-outline-danger btn-sm" onClick={handleLogout}>
          <i className="bi bi-box-arrow-right me-1"></i> Sair
        </button>
      </header>

      {/* Container principal */}
      <div className="container mb-4">
        <div className="row">
          {/* Formulário de PIX */}
          <div className="col-lg-5 mb-4">
            <div className="card shadow-sm p-3 h-100">
              <h5 className="mb-3">
                <i className="bi bi-qr-code me-2"></i>Enviar PIX
              </h5>
              <form>
                <div className="mb-3">
                  <label className="form-label">Nome do Usuário</label>
                  <input type="text" className="form-control" placeholder="Digite o nome completo" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Valor (R$)</label>
                  <div className="input-group">
                    <span className="input-group-text">R$</span>
                    <input type="number" step="0.01" className="form-control" placeholder="0,00" required />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Descrição</label>
                  <textarea className="form-control" rows="2" placeholder="Motivo do PIX" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Comprovante</label>
                  <input type="file" className="form-control" accept=".pdf,.jpg,.png" required />
                  <small className="text-muted">PDF, JPG ou PNG (máx. 5MB)</small>
                </div>
                <button type="submit" className="btn btn-primary w-100 mt-2">
                  <i className="bi bi-send-fill me-2"></i> Enviar PIX
                </button>
              </form>
            </div>
          </div>

          {/* Saldos e gráfico */}
          <div className="col-lg-7">
            {/* Campo de saldo inicial */}
            <div className="mb-3">
              <label className="form-label">
                <i className="bi bi-pencil-square me-2"></i>Definir Saldo Inicial
              </label>
              <div className="input-group">
                <span className="input-group-text">R$</span>
                <input type="number" step="0.01" className="form-control" placeholder="Digite o valor inicial" />
                <button className="btn btn-outline-primary">Salvar</button>
              </div>
            </div>

            {/* Cards */}
            <div className="row g-3 mb-3">
              <div className="col-md-4">
                <div className="card p-3 border-primary h-100">
                  <h6 className="text-muted">
                    <i className="bi bi-coin me-2"></i>Saldo Inicial
                  </h6>
                  <p className="fs-4 fw-bold text-primary">R$ 10.000,00</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card p-3 border-success h-100">
                  <h6 className="text-muted">
                    <i className="bi bi-wallet2 me-2"></i>Saldo Disponível
                  </h6>
                  <p className="fs-4 fw-bold text-success">R$ 6.200,00</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card p-3 border-warning h-100">
                  <h6 className="text-muted">
                    <i className="bi bi-hourglass me-2"></i>Saldo Pendente
                  </h6>
                  <p className="fs-4 fw-bold text-warning">R$ 3.800,00</p>
                </div>
              </div>
            </div>

            {/* Gráfico */}
            <div className="card p-3">
              <h6>
                <i className="bi bi-bar-chart me-2"></i>Movimentação
              </h6>
              <div className="d-flex justify-content-between align-items-end" style={{ height: "100px" }}>
                <div className="text-center" style={{ width: "30%" }}>
                  <div style={{ height: "60%", background: "#007bff", borderRadius: "5px 5px 0 0" }}></div>
                  <small>Inicial</small>
                </div>
                <div className="text-center" style={{ width: "30%" }}>
                  <div style={{ height: "40%", background: "#28a745", borderRadius: "5px 5px 0 0" }}></div>
                  <small>Disponível</small>
                </div>
                <div className="text-center" style={{ width: "30%" }}>
                  <div style={{ height: "25%", background: "#ffc107", borderRadius: "5px 5px 0 0" }}></div>
                  <small>Pendente</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabela de comprovantes */}
      <main className="container">
        <div className="card p-3 mb-5 shadow">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="mb-0">
              <i className="bi bi-receipt me-2"></i>Comprovantes Pendentes
            </h5>
            <div className="input-group" style={{ width: "300px" }}>
              <input type="text" className="form-control" placeholder="Filtrar..." />
              <button className="btn btn-outline-secondary">
                <i className="bi bi-funnel"></i>
              </button>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th>Usuário</th>
                  <th>Data</th>
                  <th>Valor</th>
                  <th>Descrição</th>
                  <th>Status</th>
                  <th className="text-end">Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src="https://via.placeholder.com/40"
                        className="rounded-circle me-2"
                        width="30"
                        height="30"
                        alt="Maria Oliveira"
                      />
                      <span>Maria Oliveira</span>
                    </div>
                  </td>
                  <td>15/06/2024</td>
                  <td>R$ 450,00</td>
                  <td>Reembolso de despesas de viagem</td>
                  <td>
                    <span className="badge bg-warning text-dark">
                      <i className="bi bi-hourglass me-1"></i>Pendente
                    </span>
                  </td>
                  <td className="text-end">
                    <button className="btn btn-sm btn-success me-1">
                      <i className="bi bi-check-lg"></i> Aprovar
                    </button>
                    <button className="btn btn-sm btn-danger me-1">
                      <i className="bi bi-x-lg"></i> Ajustar
                    </button>
                    <button className="btn btn-sm btn-outline-primary">
                      <i className="bi bi-download"></i> Nota
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src="https://via.placeholder.com/40"
                        className="rounded-circle me-2"
                        width="30"
                        height="30"
                        alt="Carlos Souza"
                      />
                      <span>Carlos Souza</span>
                    </div>
                  </td>
                  <td>14/06/2024</td>
                  <td>R$ 1.200,00</td>
                  <td>Pagamento de fornecedor</td>
                  <td>
                    <span className="badge bg-warning text-dark">
                      <i className="bi bi-hourglass me-1"></i>Pendente
                    </span>
                  </td>
                  <td className="text-end">
                    <button className="btn btn-sm btn-success me-1">
                      <i className="bi bi-check-lg"></i> Aprovar
                    </button>
                    <button className="btn btn-sm btn-danger me-1">
                      <i className="bi bi-x-lg"></i> Ajustar
                    </button>
                    <button className="btn btn-sm btn-outline-primary">
                      <i className="bi bi-download"></i> Nota
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-muted py-3">
        <small>Desenvolvido por Edgar Tavares</small>
      </footer>
    </div>
  );
};

export default AdminPanel;