import React from'react';
import Popular from'./Popular';
import {BrowserRouter as Router, Route, Switch} from'react-router-dom';
import Nav from'./Nav';
import Home from'./Home';
import Battle from'./Battle';
import Results from'./Results';

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
						<Route render={() => <p>Not Found</p>} />
					</Switch>
				</div>
			</Router>
			// JSX (vitual DOM)
			
		)
	}
}


export default App; 