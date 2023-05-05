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

import { Location } from "react-router-dom";

import Navbar from "./components/_NavBar";
import Card from "./components/_Card";
import Footer from "./components/_Footer";

function NotFound() {
  return (
    <>
      <Navbar />
      <main className="sobre">
        <h1>Erro 404</h1>
        <p className="text-black">
          Erro a página <span className="strong-pink">{location.pathname}</span>{" "}
          não foi encontrada
        </p>
      </main>

      <div className="d-flex justify-content-center">
        <img src="/Site.png" alt="Logo"></img>
      </div>
      <Footer />
    </>
  );
}
export default NotFound;
