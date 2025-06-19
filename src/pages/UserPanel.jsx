import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const UserPanel = () => {
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
        <h5 className="mb-0">
          <i className="bi bi-wallet2 me-2"></i>Prestação de Contas - Usuário
        </h5>
        <button className="btn btn-outline-danger btn-sm" onClick={handleLogout}>
          <i className="bi bi-box-arrow-right me-1"></i> Sair
        </button>
      </header>

      {/* Conteúdo */}
      <main className="container">
        <div className="row">
          {/* Coluna do saldo + avisos */}
          <div className="col-md-6 mb-4 d-flex flex-column gap-3">
            <div className="card shadow-sm p-3 bg-light position-relative border-success">
              <i
                className="bi bi-wallet2 text-success position-absolute"
                style={{ fontSize: "4rem", opacity: 0.1, right: "15px", top: "15px" }}
              ></i>
              <h6 className="mb-2">
                <i className="bi bi-cash-stack me-2"></i>Saldo Disponível
              </h6>
              <p className="fs-2 fw-bold text-success mb-0">R$ 0,00</p>
              <small className="text-muted">Aguardando crédito...</small>
            </div>

            <div className="card shadow-sm p-3">
              <h6 className="mb-3">
                <i className="bi bi-megaphone-fill me-2"></i>Últimas Aprovações
              </h6>
              <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Compra de Materiais - Aprovada
                  </div>
                  <span className="badge bg-light text-muted">14/06/2024</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Transporte - Aprovado
                  </div>
                  <span className="badge bg-light text-muted">13/06/2024</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Manutenção - Aprovada
                  </div>
                  <span className="badge bg-light text-muted">12/06/2024</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card Registrar Despesa */}
          <div className="col-md-6 mb-4">
            <div className="card shadow-sm p-3 h-100">
              <h5 className="mb-3">
                <i className="bi bi-file-earmark-plus me-2"></i>Registrar Despesa
              </h5>
              <form>
                <div className="mb-3">
                  <label className="form-label">Descrição</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ex.: Compra de materiais"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Valor (R$)</label>
                  <div className="input-group">
                    <span className="input-group-text">R$</span>
                    <input type="number" step="0.01" className="form-control" placeholder="0,00" required />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Categoria</label>
                  <select className="form-select" required>
                    <option selected disabled value="">Escolha...</option>
                    <option value="Material">Material</option>
                    <option value="Serviço">Serviço</option>
                    <option value="Transporte">Transporte</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Nota Fiscal</label>
                  <input type="file" className="form-control" accept=".pdf" required />
                  <small className="text-muted">Apenas PDF, até 3MB.</small>
                </div>
                <button type="submit" className="btn btn-primary w-100 mt-2">
                  <i className="bi bi-send-fill me-2"></i>Enviar Despesa
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Histórico de Despesas */}
        <div className="card shadow-sm p-3 mb-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="mb-0">
              <i className="bi bi-clock-history me-2"></i>Histórico de Despesas
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
                  <th>Data</th>
                  <th>Descrição</th>
                  <th>Valor</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>--</td>
                  <td>--</td>
                  <td>--</td>
                  <td>
                    <span className="badge bg-secondary">--</span>
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

export default UserPanel;
