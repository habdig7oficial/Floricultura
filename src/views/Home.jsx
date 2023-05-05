import Navbar from "./components/_NavBar";
import Card from "./components/_Card";
import Footer from "./components/_Footer";

function Home() {
  return (
    <>
      <Navbar />
      <div className="sobre">
        <h1>BUQUÊS E FLORES</h1>
        <p>Presenteie quem você ama</p>
      </div>
      <div className="card-group">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </>
  );
}
export default Home;
