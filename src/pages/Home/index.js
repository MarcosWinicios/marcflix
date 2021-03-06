import React from 'react';
import dadosIniciais from '../../data/dados_iniciais.json';
import Menu from '../../components/Menu'
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

function Home() {
  return (
    <div >
      <Menu/>
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores."}
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
      <Carousel 
        category={dadosIniciais.categorias[4]}
      />

    </div>
  );
}

export default Home;
