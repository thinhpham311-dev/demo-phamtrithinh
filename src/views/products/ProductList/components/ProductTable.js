import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import classNames from 'classnames'
import GridItem from './GridItem'
import ListItem from './ListItem'
import { getProductList } from '../store/dataSlice'
import { Spinner } from 'components/ui'

const ProductTable = () => {
	const dispatch = useDispatch()

	const loading = useSelector((state) => state.productList.data.loading)
	const view = useSelector((state) => state.productList.state.view)
	const { order } = useSelector((state) => state.productList.state.query)
	const data = useSelector((state) => state.productList.data.dataProducts)

	console.log(data)

	useEffect(() => {
		dispatch(getProductList({ order }))
	}, [dispatch, order])

	return (
		<>
			<div className={classNames('mt-6 h-full flex flex-col', loading && 'justify-center')}>
				{loading && (
					<div className="flex justify-center">
						<Spinner size={40} />
					</div>
				)
				}
				{
					(view === 'grid' && data.length > 0 && !loading) && (
						<div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
							{
								data.map(product => (
									<GridItem key={product.id} data={product} />
								))
							}
						</div>
					)
				}
				{
					(view === 'list' && data.length > 0 && !loading) && (
						data.map(product => (
							<ListItem key={product.id} data={product} />
						))
					)
				}
			</div>
		</>
	)
}

export default ProductTable
