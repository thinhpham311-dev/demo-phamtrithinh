import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Card, toast, Notification } from 'components/ui'
import { DoubleSidedImage } from 'components/shared'
import { useNavigate } from 'react-router-dom'
import { Button } from 'components/ui'
import {
	HiOutlinePencil
} from 'react-icons/hi'
import DeleteProductButton from './DeleteProductButton'
import { deleteProduct, getProductList } from '../store/dataSlice'


const ListItem = ({ data, cardBorder }) => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { order } = useSelector((state) => state.productList.state.query)
	const {
		id,
		imgList,
		name,
		code,
		price,
		img
	} = data

	const onEdit = () => {
		navigate(`/products/edit/${id}`)
	}

	const onhandleDelete = async (setDialogOpen) => {
		setDialogOpen(false)
		const success = await deleteProduct({ id })
		dispatch(getProductList({ order }))
		if (success) {
			toast.push(
				<Notification title={`xoá thành công`} type="success" duration={2500}>
					Bạn đã cập nhật sản phẩm xoá thành công
				</Notification>
				, {
					placement: 'top-center'
				}
			)
			navigate('/products')
		}
	}

	return (

		<Card bordered={cardBorder} className="mb-4">
			<div className="grid gap-x-4 grid-cols-12">
				<div className="my-1 sm:my-0 col-span-12 sm:col-span-1 md:col-span-2 lg:col-span-2 md:flex md:items-center">
					<div className="h-[100px] w-[100px] overflow-hidden">
						<DoubleSidedImage style={imageStyled} src={img && (imgList && imgList.length > 0 ? imgList[0]?.img : "/img/others/upload.png")} darkModeSrc={img && (imgList && imgList.length > 0 ? imgList[0]?.img : "/img/others/upload-dark.png")} />
					</div>
				</div>
				<div className="my-1 sm:my-0 col-span-12 sm:col-span-2 md:col-span-2 lg:col-span-2 md:flex md:items-center">
					<h6 className="font-thin uppercase">
						{code}
					</h6>
				</div>
				<div className="my-1 sm:my-0 col-span-12 sm:col-span-2 md:col-span-2 lg:col-span-4 md:flex md:items-center">
					<h6 className="font-bold">
						{name}
					</h6>
				</div>

				<div className="my-1 sm:my-0 col-span-12 sm:col-span-2 md:col-span-2 lg:col-span-2 md:flex md:items-center">
					<h6 className="font-thin">
						${price}
					</h6>
				</div>

				<div className="my-1 sm:my-0 col-span-12 sm:col-span-2 md:col-span-2 lg:col-span-2 flex md:items-center justify-end">
					<div className="flex gap-x-3 text-lg">
						<Button
							variant="twoTone"
							icon={<HiOutlinePencil />}
							size="sm" className={`bg-yellow-500 hover:bg-yellow-400 text-white cursor-pointer flex justify-center items-center flex-1 p-2 `} onClick={onEdit}>
							Cập nhật
						</Button>
						<DeleteProductButton onDelete={onhandleDelete} />
					</div>
				</div>
			</div>
		</Card>

	)
}

export default ListItem

const imageStyled = {
	objectFit: "cover",
	objectPosition: "center"
}