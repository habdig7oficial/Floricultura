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

function Cadastro() {
  return (
    <>
      <Navbar />
      <section className="login">
        <form method="post">
          <h1>Cadastro</h1>
          <input type="text" name="text" placeholder="Insira Seu Nome" />
          <input type="email" name="email" id="email" placeholder="Email" />
          <input type="password" name="senha" id="senha" placeholder="Senha" />
          <input
            type="password"
            name="senha"
            id="senha"
            placeholder="Confirme Sua Senha"
          />
          <button className="LoginBtn">Efetuar Cadastro</button>
          <div className="text-center mt-1 p-1 rounded-5">
            <a className="p-2" href="/login">
              Já poussui uma conta?
            </a>
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
}

export default Cadastro;
