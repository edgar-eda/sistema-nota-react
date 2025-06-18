import Header from "../components/Header";
import SaldoCards from "../components/SaldoCards";
import ComprovantesPendentes from "../components/ComprovantesPendentes";
import UltimasMovimentacoes from "../components/UltimasMovimentacoes";

export default function AdminPanel() {
  return (
    <div className="container-fluid p-4">
      <Header />
      <SaldoCards />
      <ComprovantesPendentes />
      <UltimasMovimentacoes />
    </div>
  );
}