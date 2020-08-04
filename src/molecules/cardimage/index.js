import React from 'react';
import { CardImage } from './style.js';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Image from '../../atoms/image';
import CardDeck from 'react-bootstrap/CardDeck'



function cardImage() {
  return (
    <CardImage>
      <CardDeck>
        <CardGroup>
          <Card >
            <div style={{ padding: '10px' }}>
              <Image
                url={"https://i.ytimg.com/vi/kFbH34tYHRs/maxresdefault.jpg"}
                width={"100%"}
                height={"150px"}
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
            </div>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card style={{ padding: '10px' }}>
            <div>
            </div>
            <Image
              url={"https://i.ytimg.com/vi/kFbH34tYHRs/maxresdefault.jpg"}
              width={"100%"}
              height={"150px"}
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to additional
        content.{' '}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card style={{ padding: '10px' }}>
            <div>
            </div>
            <Image
              url={"https://i.ytimg.com/vi/kFbH34tYHRs/maxresdefault.jpg"}
              width={"100%"}
              height={"150px"}
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
      </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </CardDeck>
    </CardImage>
  );
}

export default cardImage;
