var React = require("react");
var ReactRouter = require("react-router-dom");
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Nav = require("./Nav");
var Home = require("./Home");
var Compare = require("./Compare");
var Results = require("./Results");

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/compare" component={Compare} />
            {/* <Route exact path="/Compare" component={Compare} /> */}
            <Route path="/Compare/results" component={Results} />
            <Route
              render={function() {
                return <p>Not Found</p>;
              }}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

module.exports = App;
