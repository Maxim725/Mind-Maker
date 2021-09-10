import React from 'react'
import UserIcon from '../../../img/UserIcon.svg'
import './styles/style.scss'

export const UserInfo = () => {
	return (
		<div className="user__header">
			<img src={UserIcon} className="user__icon" />
		</div>
	)
}