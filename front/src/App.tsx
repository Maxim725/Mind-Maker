import { Homepage } from './pages/Homepage'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Tests } from './pages/Tests'
import './app-style.scss'
import Header from './components/general/header'

export const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route exact path="/tests" component={Tests} />
			</Switch>
		</BrowserRouter>
	)
}