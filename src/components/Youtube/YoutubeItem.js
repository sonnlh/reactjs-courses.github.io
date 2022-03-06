import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";

const YoutubeItem = (props) => {
    return (
        <Card className={`yt-item ${props.className}`} style={{ width: '18rem'}}>
  <Card.Img variant="top" src={props.item.image || `https://cdn.tgdd.vn/Files/2015/09/09/698241/zalo20.jpg`} />
  <Card.Body>
    <Card.Title>{props.item.title || 'This is example of title'}</Card.Title>
    <Card.Text>
      {props.item.description}
    </Card.Text>
    <div class="button-24">Go somewhere</div>
  </Card.Body>
</Card>
    );
};

export default YoutubeItem;