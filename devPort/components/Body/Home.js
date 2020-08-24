import React from "react";
import bodyS from "./Body.css";
import withStyles from "isomorphic-style-loader/withStyles";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: [],
    };
  }

  componentDidMount() {
    this.setState({
      loaded: require("../../../public/the-developer.jpg"),
    });
  }
  render() {
    return (
      <div className={bodyS.media}>
        <img src={this.state.loaded} alt="The Web Developer" />
        <h2>Skills:</h2>
        <ul className={bodyS.skills}>
          <li id="react">React</li>
          <li id="express">Express</li>
          <li id="js">Javascript</li>
          <li id="hc">HTML/CSS</li>
          <li id="mdb">MongoDB</li>
          <li id="seo">SEO Techniques</li>
        </ul>
      </div>
    );
  }
}

export default Home;
//export default withStyles(bodyS)(Home);
