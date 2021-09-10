import React from 'react'
import { TestItem } from './TestItem'

export const TestList = () => {
	return (
		<ul className="test__list">
			<li className="test__item">
				<TestItem />
			</li>
			<li>
				<TestItem />
			</li>
			<li>
				<TestItem />
			</li>
			<li>
				<TestItem />
			</li>
		</ul>
	)
}