import React from "react"
import { CardGroup } from "react-bootstrap"
import CardHeader from "react-bootstrap/esm/CardHeader"
import { Card, CardImg, CardProps, CardImgProps, CardButton, Button, style } from 'react-bootstrap';

import { Container, Row, Col } from "react-bootstrap";
const Courses = () => {
  return (
    <Container>
      <Row>
        {data.map((playerData, k) => (
          <Col key={k} xs={12} md={4} lg={3}>
            <Card >
              <Card.Img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/let%27s-do-it%3A-yoga-training-youtube-thumbnail-design-template-400eea9d5f8b19a67a95207d58d95c48_screen.jpg?ts=1598472616" />

              <Card.Body>
                <Card.Title>{playerData.title}</Card.Title>
                <Card.Text>{playerData.text}</Card.Text>
                <div class="LearnNow">
                  <Button variant="warning">
                    <a href="/LogIn">Learn now</a>
                  </Button>
                </div>
              </Card.Body>

            </Card>
          </Col>

        ))}
        <br />
      </Row>
    </Container>
  )
}


const data = [
  {
    title: "GUIDE TO YOGA",
    text: "Learn how to start ",
    imgsrc: "firstimg.jpg"
  },
  {
    title: "15 MINUTE BACK PAIN",
    text: "Relive your pain",
    imgsrc: "secondimg.jpg"
  },
  {
    title: "RISE & FLOW  ",
    text: " Morning yoga",
    imgsrc: "thirdimg.jpg"
  },
  {
    title: "FLOW 15",
    text: "Feel-good yoga classes ",
    imgsrc: "firstimg.jpg"
  },
  {
    title: "POWER YOGA SCULPT",
    text: "Perfect blend ",
    imgsrc: "secondimg.jpg"
  },
  {
    title: " YOGA FOR SLEEP ",
    text: "Wind down from the day ",
    imgsrc: "thirdimg.jpg"
  },
  {
    title: "  EVENING YOGA",
    text: " Let go and flow with Unwind",
    imgsrc: "firstimg.jpg"
  },
  {
    title: "YAMAS IN MOTION",
    text: " Bring balance to your life ",
    imgsrc: "secondimg.jpg"
  },
  {
    title: "YOGA FOR BEGINNERS",
    text: "Develop a daily practice",
    imgsrc: "thirdimg.jpg"
  },
  {
    title: " MOVE TO MEDITATE",
    text: " Carve out time for yourself ",
    imgsrc: "firstimg.jpg"
  },
  {
    title: "GUIDE TO YOGA",
    text: "Learn how to start ",
    imgsrc: "firstimg.jpg"
  },
  {
    title: "15 MINUTE BACK PAIN",
    text: "Relive your pain",
    imgsrc: "secondimg.jpg"
  },
  {
    title: "RISE & FLOW  ",
    text: " Morning yoga",
    imgsrc: "thirdimg.jpg"
  },
  {
    title: "FLOW 15",
    text: "Feel-good yoga classes ",
    imgsrc: "firstimg.jpg"
  },
  {
    title: "POWER YOGA SCULPT",
    text: "Perfect blend ",
    imgsrc: "secondimg.jpg"
  },
  {
    title: " YOGA FOR  SLEEP ",
    text: "Wind down from the day ",
    imgsrc: "thirdimg.jpg"
  },


];

export default Courses