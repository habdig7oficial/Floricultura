import Navbar from "./components/_NavBar";
import Card from "./components/_Card";
import Footer from "./components/_Footer";

function Home() {
  const cards: Array<JSX.Element> = [];

  for (let i = 0; i < 5; i++) {
    cards.push(<Card />);
  }

  return (
    <>
      <Navbar />
      <div className="sobre">
        <h1>BUQUÊS E FLORES</h1>
        <p>Presenteie quem você ama</p>
      </div>
      <div className="card-group">{cards}</div>
      <Footer />
    </>
  );
}
export default Home;
