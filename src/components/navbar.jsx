import Logo from "/Logo.png";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <a href="/">
          <img src={Logo} id="Logo" />
        </a>
        <div className="navbar-items">
          <a href="/">Home</a>
          <a href="/produtos">Produtos</a>
          <a href="/login">Login</a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
