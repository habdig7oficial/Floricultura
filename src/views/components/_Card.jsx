export default function Card({ src = "/flor.jpg" }) {
  return (
    <>
      <div className="card rounded">
        <img src={src} alt="Flor" />
        <div>
          <h4>Flor</h4>
          <p>Flores são lindas. Compre já!</p>
        </div>
      </div>
    </>
  );
}
