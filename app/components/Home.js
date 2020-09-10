var React = require("react");
var Link = require("react-router-dom").Link;
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <br />
        <br />
        <br />
        <h1>Compare Your Github Profile</h1>
        <Link className="button" to="/Compare">
          Compare
        </Link>
      </div>
    );
  }
}

module.exports = Home;
