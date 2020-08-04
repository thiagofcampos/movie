import React from 'react';
import { ContainerCarrossel } from './style.js';
import Carousel from 'react-bootstrap/Carousel'
import imageRender from '../../utils/imageRender';
import Image from '../../atoms/image';



function containerCarrossel({movieList}) {
  return (
    <ContainerCarrossel>
      <Carousel>
        {
          movieList && movieList.map((item) => (
            <Carousel.Item>
              <Image
                url={imageRender(item.backdrop_path)}
                width={"100%"}
                height={"400px"}
              />
              <Carousel.Caption/>
            </Carousel.Item>
          ))
        }
      </Carousel>
    </ContainerCarrossel>
  );
}

export default containerCarrossel;
