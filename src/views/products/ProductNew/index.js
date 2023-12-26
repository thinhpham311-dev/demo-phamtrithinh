import React from 'react'
import ProductForm from 'views/products/ProductForm'
import { toast, Notification } from 'components/ui'
import { useNavigate } from 'react-router-dom'
import { apiCreateProduct } from 'services/ProductService'

const ProductNew = () => {

	const navigate = useNavigate()

	const addProduct = async (data) => {
		const response = await apiCreateProduct(data)
		return response.data
	}

	const handleFormSubmit = async (values, setSubmitting) => {
		setSubmitting(true)
		const success = await addProduct(values)
		setSubmitting(false)
		if (success) {
			toast.push(
				<Notification title={'Thêm sản phẩm thành công'} type="success" duration={2500}>
					Bạn đã thêm sản phẩm thành công
				</Notification>
				, {
					placement: 'top-center'
				}
			)
			navigate('/products')
		}

	}

	const handleDiscard = () => {
		navigate('/products')
	}

	return (
		<>
			<h3 className="mb-10 font-bold">Thêm sản phẩm</h3>
			<ProductForm
				type="new"
				onFormSubmit={handleFormSubmit}
				onDiscard={handleDiscard}
			/>
		</>
	)
}

export default ProductNew