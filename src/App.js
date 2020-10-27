import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { css, Global } from '@emotion/core';
import Home from './pages';
import SignIn from './pages/signin';

function App() {
	return (
		<Router>
			<Global
				styles={css`
					* {
						box-sizing: border-box;
						margin: 0%;
						padding: 0;
						font-family: 'Encode Sans Expanded', sans-serif;
					}
				`}
			/>
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/signin" component={SignIn} exact />  
			</Switch>
		</Router>
	);
}

export default App;
