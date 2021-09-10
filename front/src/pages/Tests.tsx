import React from 'react'
import { Topbar } from '../../src/components/general/topbar'
import { TestList } from '../../src/components/tests'

export const Tests = () => {
	return (
		<div className="container test__page">
			<Topbar>
			</Topbar>
			<TestList />
		</div>
	)
}