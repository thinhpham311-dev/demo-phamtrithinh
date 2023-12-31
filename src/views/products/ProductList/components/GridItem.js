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


const GridItem = ({ data }) => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { order } = useSelector((state) => state.productList.state.query)
	const {
		id,
		code,
		name,
		price,
		imgList,
		img
	} = data

	const onEdit = () => {
		navigate(`/edit/${id}`)
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
			navigate('/list')
		}
	}




	return (
		<Card bodyClass="h-full">
			<div className="flex flex-col justify-between h-full">

				<div className=" flex items-center justify-between mb-5">
					<span className="uppercase">{code}</span>
				</div>
				<div className="mb-5 h-[217px] flex items-center justify-center overflow-hidden">
					<DoubleSidedImage style={imageStyled} src={img && (imgList && imgList.length > 0 ? imgList[0]?.img : "/img/others/upload.png")} darkModeSrc={img && (imgList && imgList.length > 0 ? imgList[0]?.img : "/img/others/upload-dark.png")} />
				</div>
				<h6 className="text-sm">{name}</h6>
				<span className="font-thin mb-5">${price}</span>
				<div className="flex gap-x-3 text-lg">
					<Button
						variant="twoTone"
						icon={<HiOutlinePencil />}
						size="sm" className={`bg-yellow-500 hover:bg-yellow-400 text-white cursor-pointer flex-1 justify-center items-center p-2 `} onClick={onEdit}>
						Cập nhật
					</Button>
					<DeleteProductButton onDelete={onhandleDelete} />
				</div>
			</div>
		</Card>

	)
}

export default GridItem

const imageStyled = {
	objectFit: "cover",
	objectPosition: "center"
}
