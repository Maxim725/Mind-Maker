import React from 'react'
import { Link } from 'react-router-dom'
//! Alias does not work!
import Logo from '../../../img/Logo.svg'
import SearchMini from '../searchMini'
import { UserInfo } from '../userInfo/UserInfo'

import './styles/style.scss'

export const Header = () => {
	return (
		<header className="header container">
			<nav className="header__links">
				<Link to="/">
					<div className="header__logo">
						<img src={Logo} alt="" />
					</div>
				</Link>

				<Link to="/today">
					<div className="header__link">
						<p>Today</p>
					</div>
				</Link>
				<Link to="/tests">
					<div className="header__link">
						<p>Tests</p>
					</div>
				</Link>
				<div className="header__link">
					<p>Lectures</p>
				</div>
				<div className="header__link">
					<p>Rooms</p>
				</div>
			</nav>
			<div className="header__right">
				<SearchMini />
				<UserInfo />
			</div>
		</header>
	)
}