interface image {
  src?: string;
  alt?: string;
  title?: string;
  text?: string;
}

export default function Card({
  src = "/flor.jpg",
  alt = "Flor",
  title = "Flor",
  text = "Flores são lindas. Compre já!",
}: image) {
  return (
    <>
      <div className="card rounded">
        <img src={src} alt={alt} />
        <div>
          <h4>{title}</h4>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
