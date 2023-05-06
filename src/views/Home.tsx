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

import { useState, useEffect } from "react";

import Navbar from "./components/_NavBar";
import Card from "./components/_Card";
import Footer from "./components/_Footer";

import type { image } from "./components/_Card";

function Home() {
  
  const cards: Array<JSX.Element> = [];

  let dummyData: Array<image> = [{
    src: "/flor.jpg",
    alt: "Flor",
    title: "Flor",
    text: "Flores são lindas. Compre já!",
  }]

  let [Data, SetData] = useState(dummyData);

  useEffect(() => {
  fetch(`http://localhost:7778/`)
   .then((response) => response.json())
   .then((flores) => { 
      SetData(flores)
    });
 }, []);


  for (let i = 0; i < Data.length; i++) {
    cards.push(<Card src={ Data[i].src } alt={ Data[i].alt } title={ Data[i].title } text={ Data[i].text } key={ i } />);
  }

  return (
    <>
      <Navbar />
      <div className="sobre">
        <h1>BUQUÊS E FLORES</h1>
        <p>Presenteie quem você ama</p>
      </div>
      <div className="card-group">{cards}</div>
      <Footer />
    </>
  );
}
export default Home;
