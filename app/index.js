var React = require("react");
var ReactDom = require("react-dom");
require("./index.css");
var PropTypes = require("prop-types");
var App = require("./components/App");

//properties that can be associated with a component:
// state
// lifecycle event
// UI - render method describes UI for specific components

// Render component to DOM
ReactDom.render(<App />, document.getElementById("app"));
