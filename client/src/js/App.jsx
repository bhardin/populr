var React = require('react');
window.React = React;
var Router = require('react-router');
var NavBar = require('./components/NavBar.jsx');

/* Main App */
var App = React.createClass({
  render: function(){
    return (
        <div className="full">
          <NavBar />
          <h1>Welcome to Populr</h1>
        </div>
      );
  }
});

React.render(<App />, document.getElementById('app'));
