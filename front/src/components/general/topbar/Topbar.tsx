import React from 'react'
import './styles/style.scss'

interface PropsTopbar {
	children?: React.ReactNode
}

export const Topbar = ({ children }: PropsTopbar) => {
	return (
		<div className="topbar">
			{children}
		</div>
	)
}