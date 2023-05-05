import Logo from "/Logo.png";
import LogoVariation from "/LogoVariation.svg";

function Navbar() {
  let padding = 2;
  return (
    <>
      <nav className="navbar">
        <a className="m-1 d-flex flex-row align-items-center" href="/">
          {/*<img src={Logo} id="Logo" />*/}
          <img
            className="l-width"
            src={LogoVariation}
            alt="Flores Ilustraçao"
          ></img>

          <div className="mx-4">
            <h5 className="mx-1 NavTitle">Flor de Lis</h5>
            <p className="NavSTitle">Deixe florecer</p>
          </div>
        </a>
        <div className={"mx-" + padding}>
          <a className={"px-" + padding} href="/">
            Home
          </a>
          <a className={"px-" + padding} href="/produtos">
            Produtos
          </a>
          <a className={"px-" + padding} href="/login">
            Login
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
