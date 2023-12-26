import React from 'react'
import classNames from 'classnames'

const withHeaderItem = Component => props => {

	const { className } = props

	return (
		<Component
			{...props}
			className={
				classNames(
					'header-action-item',
					className
				)}
		/>
	)
}

export default withHeaderItem
