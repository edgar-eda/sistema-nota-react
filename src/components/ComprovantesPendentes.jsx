export default function ComprovantesPendentes() {
  return (
    <div className="card mb-4">
      <div className="card-header">
        <h5>Comprovantes Pendentes</h5>
      </div>
      <div className="card-body">
        <table className="table">
          <thead>
            <tr>
              <th>Data</th>
              <th>Usuário</th>
              <th>Valor</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01/06/2025</td>
              <td>Maria</td>
              <td>R$ 150,00</td>
              <td><span className="badge text-bg-warning">PENDENTE</span></td>
              <td>
                <button className="btn btn-sm btn-success me-2">Aprovar</button>
                <button className="btn btn-sm btn-danger">Ajustar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}