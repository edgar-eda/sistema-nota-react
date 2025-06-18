export default function Header() {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h2>Painel do Administrador</h2>
      <button className="btn btn-outline-danger">
        <i className="bi bi-box-arrow-right me-2"></i>Sair
      </button>
    </div>
  );
}