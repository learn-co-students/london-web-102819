import React from "react";
import { Card } from "semantic-ui-react";
import { Link } from "react-router-dom";

const colorMap = {
  poison: "purple",
  grass: "green",
  fire: "red",
  bug: "olive",
  electric: "yellow",
  water: "blue",
  fairy: "pink",
  normal: "grey",
  ground: "brown",
  fighting: "teal",
  dragon: "orange",
  ghost: "violet"
};

class PokemonCard extends React.Component {
  state = {
    showFront: true
  };

  toggleFrontState = () => this.setState({ showFront: !this.state.showFront });

  render() {
    const hp = this.props.stats.find(stat => stat.name === "hp");
    const speed = this.props.stats.find(stat => stat.name === "speed");
    const { front, back } = this.props.sprites;
    const color = colorMap[this.props.types[0]] || "black";

    return (
      <Card
        onClick={this.toggleFrontState}
        color={color}
        style={{ background: this.props.selected ? "blue" : "red" }}
      >
        <div>
          <div className="image">
            <img alt="oh no!" src={this.state.showFront ? front : back} />
          </div>
          <div className="content">
            <div className="header">
              <Link to={`/pokemon/${this.props.id}`}>{this.props.name}</Link>
            </div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp.value}
            </span>
            <span>
              <i className="icon lightning yellow" />
              {speed.value}
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
