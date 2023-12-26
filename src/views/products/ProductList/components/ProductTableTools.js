import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Tooltip } from 'components/ui'
import { HiPlusCircle, HiOutlineViewGrid, HiOutlineViewList } from 'react-icons/hi'
import { toggleView } from '../store/stateSlice'
import { Link } from 'react-router-dom'


const ProductTableTools = () => {
	const dispatch = useDispatch()
	const view = useSelector((state) => state.productList.state.view)
	const userAuthority = useSelector((state) => state.auth.user.authority)

	const role = userAuthority.includes("admin");

	const onViewToggle = () => {
		dispatch(toggleView(view === 'grid' ? 'list' : 'grid'))
	}
	return (
		<div className="flex flex-col lg:flex-row lg:items-center">
			<Tooltip title={view === 'grid' ? 'Danh sách dạng dòng' : 'Danh sách dạng cột'}>
				<Button
					className="hidden md:flex"
					onClick={() => onViewToggle()}
					variant="plain"
					size="sm"
					icon={view === 'grid' ? <HiOutlineViewList /> : <HiOutlineViewGrid />}
				/>
			</Tooltip>
			{role &&
				<Link
					className="block lg:inline-block md:mb-0 mb-4"
					to="/products/add"
				>
					<Button
						block
						variant="solid"
						size="sm"
						icon={<HiPlusCircle />}
					>
						Thêm sản phẩm
					</Button>
				</Link>
			}
		</div>
	)
}

export default ProductTableTools