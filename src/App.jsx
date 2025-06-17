import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
// import Admin from "./pages/Admin"; // futuro
// import Usuario from "./pages/Usuario"; // futuro

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/admin" element={<Admin />} />
        <Route path="/usuario" element={<Usuario />} /> */}
      </Routes>
    </Router>
  );
}
