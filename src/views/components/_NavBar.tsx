/*
    Este arquivo é parte de Flor de Lis

    Copyright © 2023 Heloísa Real, Thiago Baptista, Mateus Vieira

    Este programa é um software livre; você pode redistribuí-lo e/ou
    modificá-lo sob os termos da Licença Pública Geral GNU como publicada
    pela Free Software Foundation; na versão 3 da Licença, ou
    (a seu critério) qualquer versão posterior.

    Este programa é distribuído na esperança de que possa ser útil,
    mas SEM NENHUMA GARANTIA; sem uma garantia implícita de ADEQUAÇÃO
    a qualquer MERCADO ou APLICAÇÃO EM PARTICULAR. Veja a
    Licença Pública Geral GNU para mais detalhes.

    Você deve ter recebido uma cópia da Licença Pública Geral GNU junto
    com este programa. Se não, veja <http://www.gnu.org/licenses/>.

    Licença disponível no arquivo COPYING.txt

*/

import LogoVariation from "/LogoVariation.svg";

function Navbar() {
  let padding: number = 2;
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

          <div className="mx-3">
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
          <a className={"px-" + padding} href="/cadastro">
            Cadastro
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
