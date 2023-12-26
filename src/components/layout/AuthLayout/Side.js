import React, { cloneElement } from 'react'

const Side = ({ children, content, ...rest }) => {
	return (
		<div className="flex flex-col justify-center items-center bg-white dark:bg-gray-800 h-full">
			<div className="xl:min-w-[450px] px-8">
				<div className="mb-8">
					{content}
				</div>
				{children ? cloneElement(children, { ...rest }) : null}
			</div>
		</div>
	)
}

export default Side