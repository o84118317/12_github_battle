let React = require('react');
let ReactDom = require('react-dom');
require('./index.css');
let App = require('./components/App')


// Reactdom.render take two arguments
// fisrt: react component
// second: where we want to set react in Dom
ReactDom.render(
	<App />,
	document.getElementById('app')
)