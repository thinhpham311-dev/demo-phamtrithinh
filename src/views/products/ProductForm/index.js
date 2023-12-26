import React, { forwardRef } from 'react'
import { FormContainer, Button, hooks } from 'components/ui'
import { StickyFooter } from 'components/shared'
import { Form, Formik } from 'formik'
import BasicInformationFields from './BasicInformationFields'
import PricingFields from './PricingFields'
import ProductImages from './ProductImages'
import cloneDeep from 'lodash/cloneDeep'
import DeleteProductButton from './DeleteProductButton'
import { AiOutlineSave } from 'react-icons/ai'
import * as Yup from 'yup'
import { IoArrowBack } from "react-icons/io5";



const { useUniqueId } = hooks

const validationSchema = Yup.object().shape({
	name: Yup.string().required('Tên sản phẩm không được để trống'),
	code: Yup.string().required('Mã sản phẩm không được để trống'),
})



const ProductForm = forwardRef((props, ref) => {

	const { type, initialData, onFormSubmit, onDiscard, onDelete } = props
	const newId = useUniqueId('product-')
	return (
		<>
			<Formik
				innerRef={ref}
				initialValues={{
					...initialData,
				}}
				validationSchema={validationSchema}
				onSubmit={(values, { setSubmitting }) => {
					const formData = cloneDeep(values)
					if (type === 'new') {
						formData.id = newId
						if (formData.imgList.length > 0) {
							formData.img = formData.imgList[0].img
						}
					}
					onFormSubmit?.(formData, setSubmitting)
				}}
			>
				{({ values, touched, errors, isSubmitting }) => (
					<Form>
						<FormContainer>
							<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
								<div className="lg:col-span-2">
									<BasicInformationFields touched={touched} errors={errors} values={values} />
									<PricingFields touched={touched} errors={errors} values={values} />
								</div>
								<div className="lg:col-span-1">
									<ProductImages touched={touched} errors={errors} values={values} />
								</div>
							</div>
							<StickyFooter
								className="-mx-8 px-8 flex items-center justify-between py-4"
								stickyClass="border-t bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
							>
								<div>
									{type === 'edit' && <DeleteProductButton onDelete={onDelete} />}
								</div>
								<div className="md:flex items-center">
									<Button
										size="sm"
										icon={<IoArrowBack />}
										className="ltr:mr-3 rtl:ml-3"
										onClick={() => onDiscard?.()}
										type="button"
									>
										Quay lại
									</Button>
									<Button
										size="sm"
										variant="solid"
										loading={isSubmitting}
										icon={<AiOutlineSave />}
										type="submit"
									>
										lưu
									</Button>
								</div>
							</StickyFooter>
						</FormContainer>
					</Form>
				)}
			</Formik>
		</>
	)
})

ProductForm.defaultProps = {
	type: 'edit',
	initialData: {
		id: '',
		name: '',
		code: '',
		img: '',
		imgList: [],
		description: '',
	}
}

export default ProductForm