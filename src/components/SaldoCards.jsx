export default function SaldoCards() {
  return (
    <div className="row mb-4">
      <div className="col-md-6">
        <div className="card border-primary shadow-sm">
          <div className="card-body text-primary">
            <h5 className="card-title">Saldo Disponível</h5>
            <p className="card-text fs-4">R$ 0,00</p>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card border-warning shadow-sm">
          <div className="card-body text-warning">
            <h5 className="card-title">Valor Pendente</h5>
            <p className="card-text fs-4">R$ 0,00</p>
          </div>
        </div>
      </div>
    </div>
  );
}