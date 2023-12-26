import React, { useEffect, useCallback } from 'react'
import { setCurrentRouteKey } from 'store/base/commonSlice'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

const AppRoute = ({ component: Component, routeKey, ...props }) => {

	const location = useLocation()

	const dispatch = useDispatch()

	const handleLayoutChange = useCallback(() => {
		dispatch(setCurrentRouteKey(routeKey))
	}, [dispatch, routeKey])

	useEffect(() => {
		handleLayoutChange()
	}, [location, handleLayoutChange])


	return (
		<Component {...props} />
	)
}

export default AppRoute