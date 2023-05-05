import Logo from "/Logo.png";

function Navbar() {
  let padding = 2;
  return (
    <>
      <nav className="navbar">
        <a href="/">
          <img src={Logo} id="Logo" />
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
