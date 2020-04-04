import React from "react";

import Profile from "../assets/images/Profile.PNG"
import Quiz from "../assets/images/Quiz.PNG"
import Budget from "../assets/images/Budget.png";
import VAgreen from "../assets/images/VAgreen.PNG";
import State from "../assets/images/State.PNG";
import Burger from "../assets/images/Burger.PNG";
import Card from "../components/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "The Green Tourist",
          subTitle: "Step Towards Solution",
          imgSrc: VAgreen,
          link: "http://thegreentourist.herokuapp.com/",
          selected: false,
        },
        {
          id: 1,
          title: "The State of Happiness",
          subTitle: "Find Your New",
          imgSrc: State,
          link: "https://baileyrva.github.io/stateofhappiness/",
          selected: false,
        },
        {
          id: 2,
          title: "Bailey's Burgers",
          subTitle: "Eat Your Imagination",
          imgSrc: Burger,
          link: "https://baileysburgers.herokuapp.com/",
          selected: false,
        },
        {
          id: 3,
          title: "Bailey Profile",
          subTitle: "JavaScript & Bootstrap",
          imgSrc: Profile,
          link: "https://baileyrva.github.io/baileyProfile/",
          selected: false,
        },
        {
          id: 4,
          title: "Code Quiz",
          subTitle: "Brain vs. HTML & CSS",
          imgSrc: Quiz,
          link: "https://baileyrva.github.io/quizzyquiz/",
          selected: false,
        },{
          id: 5,
          title: "PWA Budget",
          subTitle: "Track Offline Or On!",
          imgSrc: Budget,
          link: "https://thawing-basin-97344.herokuapp.com/",
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items,
    });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
