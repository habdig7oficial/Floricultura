import Navbar from "./components/_NavBar";
import Footer from "./components/_Footer";
import Card from "./components/_Card";

function Produtos() {
  return (
    <>
      <Navbar />
      <div className="title">
        <h1>NOSSOS PRODUTOS</h1>
        <p>Selecione seu interesse</p>
      </div>
      <div className="sub-title">
        <h1>BUQUÊS</h1>
      </div>

      <div className="card-group my-5">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <Footer />
    </>
  );
}

export default Produtos;
