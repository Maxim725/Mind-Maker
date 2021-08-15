import img from './img.jpg';
import './styles.css';
import './style.scss';
import React from 'react'
import { render } from 'react-dom'
import { App } from './App'

function getStart() {
	console.log(img)
	const str = 'werwer'
	console.log(str)
	console.log('Hello')
}

window['getStart'] = getStart

render(<App />, document.getElementById('root-app'))
