import React from "react";

class Hog extends React.Component {
  state = {
    showDetails: false
  };

  componentDidMount() {
    console.log("hog mount");
  }

  toggleDetails = () => this.setState({ showDetails: !this.state.showDetails });

  nameToImg = name =>
    name
      .toLocaleLowerCase()
      .split(" ")
      .join("_");

  nameToImgPath = name => `../hog-imgs/${this.nameToImg(name)}.jpg`;

  requireImage = () =>
    require(`../hog-imgs/${this.nameToImg(this.props.name)}.jpg`);

  render() {
    const { name, specialty, weight, greased } = this.props;
    const { showDetails } = this.state;
    const medal = this.props["highest medal achieved"];
    console.log("hog render");
    return (
      <div className="ui card">
        <div className="image">
          <img
            ref={el => {
              console.log("hog img ref");
              this.imgEl = el;
            }}
            src={this.requireImage()}
          />
        </div>
        <div className="content">
          <a className="header">{name}</a>
          <div className="meta">
            <span className="date">Speciality: {specialty}</span>
          </div>
        </div>
        {showDetails && (
          <>
            <div className="extra content">
              <a>
                <i className="weight icon"></i>
                {weight}
              </a>
            </div>
            <div className="extra content">
              <a>
                <i className="trophy icon"></i>
                {medal}
              </a>
            </div>
            <div className="extra content">
              <a>
                <i className="stopwatch icon"></i>
                {greased ? "Greased" : "not greased"}
              </a>
            </div>
          </>
        )}
        <button onClick={this.props.hide} class="ui primary button">
          hide hog
        </button>
        <button onClick={this.toggleDetails} class="ui primary button">
          {showDetails ? "Hide details" : "Show details"}
        </button>
      </div>
    );
  }
}

export default Hog;
