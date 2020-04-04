import React from "react";
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
          subTitle: "Step towards solution",
          imgSrc: VAgreen,
          link: "http://thegreentourist.herokuapp.com/",
          selected: false,
        },
        {
          id: 1,
          title: "The State of Happiness",
          subTitle: "Find your new",
          imgSrc: State,
          link: "https://baileyrva.github.io/stateofhappiness/",
          selected: false,
        },
        {
          id: 2,
          title: "Bailey's Burgers",
          subTitle: "Chomp on your imagination",
          imgSrc: Burger,
          link: "https://baileysburgers.herokuapp.com/",
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
