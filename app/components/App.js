let React = require('react');
let Popular = require('./Popular');
let ReactRouter = require('react-router-dom');
let Router = ReactRouter.BrowserRouter;
let Route = ReactRouter.Route;
let Switch = ReactRouter.Switch;
let Nav = require ('./Nav');
let Home = require('./Home');
let Battle = require('./Battle');
let Results = require('./Results');

// Component has three things 
// 1. state
// 2. lifecycle events(methods)
// 3. UI

class App extends React.Component {
	render() {
		return (
			<Router>
				<div className='container'>
					<Nav />
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/battle' component={Battle} />
						<Route path='/battle/results' component={Results} />
						<Route path='/popular' component={Popular} />
						<Route render={function (){
							return <p>Not Found</p>
						}} />
					</Switch>
				</div>
			</Router>
			// JSX (vitual DOM)
			
		)
	}
}


module.exports = App;