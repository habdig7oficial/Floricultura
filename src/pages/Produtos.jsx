import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Card } from "../components/card";
import "../Reset.css";
import "../App.css";
function Produtos() {
  return (
    <div>
      <Navbar />
      <div className="title">
        <h1>NOSSOS PRODUTOS</h1>
        <p>Selecione seu interesse</p>
      </div>
      <div className="sub-title">
        <h1>BUQUÊS</h1>
      </div>

      <div className="card-group">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </div>
  );
}

export default Produtos;
