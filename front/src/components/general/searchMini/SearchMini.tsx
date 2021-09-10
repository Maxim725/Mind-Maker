import React from 'react'
import SearchIcon from '../../../img/Search.svg'
import './styles/styles.scss'

export const SearchMini = () => {
	return (
		<div className="search__header">
			<img src={SearchIcon} className="search__icon" />
		</div>
	)
}