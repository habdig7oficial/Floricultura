import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Card } from "../components/card";
import "../Reset.css";
import "../App.css";

function Home() {
  return (
    <div>
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
    </div>
  );
}
export default Home;
