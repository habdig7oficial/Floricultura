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
            Copyright &#169; {new Date().getFullYear()} Heloísa Real, Thiago
            Baptista, Mateus Vieira
          </small>
        </div>
      </footer>
    </>
  );
}

export default Footer;
