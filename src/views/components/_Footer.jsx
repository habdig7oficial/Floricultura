function Footer() {
  return (
    <>
      <footer>
        <p>
          Projeto desenvolvido em React somente para fins acadêmicos, sendo
          software livre disponibilizado em AGPL v3 ou superior
        </p>
        <div className="credits">
          <small>
            Copyright &#169; {new Date().getFullYear} Heloísa Real, Thiago
            Baptista, Mateus Vieira
          </small>
        </div>
      </footer>
    </>
  );
}

export default Footer;
