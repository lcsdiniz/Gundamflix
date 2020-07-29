import React from 'react';
import Menu from '../../components/Menu'
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"No ano 0079 da Universal Century, a guerra entre a Federação da Terra e o Principado de Zeon chegou a um impasse. No entanto, quando Zeon descobre que os novos mobile suits da Federação estão sendo desenvolvidos na colônia espacial Side 7, Char Aznable lança um ataque para destruí-los. Um garoto chamado Amuro Ray se vê envolvido no conflito quando se torna o relutante piloto do novo mobile suit da Federação - o Gundam."}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />      

      <Carousel
        category={dadosIniciais.categorias[3]}
      />          

      <Footer />
    </div>
  );
}

export default Home;