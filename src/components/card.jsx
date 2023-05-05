function Card() {
  let img = "../../public/flor.jpg";

  return (
    <div className="card">
      <img src={img} alt="Flor" />
      <div>
        <h4>Flor</h4>
        <p>Flores são lindas. Compre já!</p>
      </div>
    </div>
  );
}

export { Card };
