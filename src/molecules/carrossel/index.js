import React from 'react';
import { ContainerCarrossel } from './style.js';
import Carousel from 'react-bootstrap/Carousel'
import Image from '../../atoms/image';



function containerCarrossel() {
  return (
    <ContainerCarrossel>
      <Carousel>
        <Carousel.Item>
          <Image
            url={"https://i.ytimg.com/vi/kFbH34tYHRs/maxresdefault.jpg"}
            width={"100%"}
            height={"400px"}
          />
          <Carousel.Caption/>
        </Carousel.Item>
        <Carousel.Item>
        <Image
            url={"https://ogimg.infoglobo.com.br/in/24026512-d8f-faf/FT1086A/652/xexterminador-do-futuro-6-arnold-schwarzenegger-prepara-novo-ator.jpg.pagespeed.ic.5uefwXLzm9.jpg"}
            width={"100%"}
            height={"400px"}
          />
          <Carousel.Caption/>
        </Carousel.Item>
      </Carousel>
    </ContainerCarrossel>
  );
}

export default containerCarrossel;
