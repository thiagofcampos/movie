import React from 'react';
import { CardImage } from './style.js';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Image from '../../atoms/image';
import CardDeck from 'react-bootstrap/CardDeck'
import imageRender from '../../utils/imageRender.js';



function cardImage({movieListPopular}) {
  console.log(movieListPopular)
  return (
    <CardImage>
      <CardDeck>
        <CardGroup>
          {
            movieListPopular && movieListPopular.map((item) => (
              <Card >
                <div style={{ padding: '10px' }}>
                  <Image
                    url={imageRender(item.backdrop_path)}
                    width={"100%"}
                    height={"150px"}
                  />
                  <Card.Body>
                    <Card.Title>{item.original_title}</Card.Title>
                    <Card.Text>
                      <div className="description">
                        {item.overview}
                      </div>
                    </Card.Text>
                  </Card.Body>
                </div>
              </Card>
            ))
          }
        </CardGroup>
      </CardDeck>
    </CardImage>
  );
}

export default cardImage;
