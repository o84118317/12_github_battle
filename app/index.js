import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './components/App'


// Reactdom.render take two arguments
// fisrt: react component
// second: where we want to set react in Dom
ReactDom.render(
	<App />,
	document.getElementById('app')
)