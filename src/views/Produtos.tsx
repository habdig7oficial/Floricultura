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

import Navbar from "./components/_NavBar";
import Footer from "./components/_Footer";
import Card from "./components/_Card";

function Produtos() {
  const cards: Array<JSX.Element> = [];

  for (let i = 0; i < 6; i++) {
    cards.push(<Card />);
  }
  return (
    <>
      <Navbar />
      <div className="title">
        <h1>NOSSOS PRODUTOS</h1>
        <p>Selecione seu interesse</p>
      </div>
      <div className="sub-title">
        <h1>BUQUÊS</h1>
      </div>

      <div className="card-group my-5">{cards}</div>

      <Footer />
    </>
  );
}

export default Produtos;
