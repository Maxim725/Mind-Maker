import React from 'react'
class Pop {
	static show = 'gg'
}

export const App = () => {
	new Promise((res) => res('a')).then(d => console.log(d))
	const vars = 0

	console.log(Pop.show)
	return (
		<div className="box">
			<h2>React tsx</h2>
			<div className="conainer-content">Container</div>
		</div>
	)
}