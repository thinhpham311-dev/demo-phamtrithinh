import React from 'react'
import { AdaptableCard } from 'components/shared'
import { Input, FormItem } from 'components/ui'
import NumberFormat from 'react-number-format'
import { Field } from 'formik'

const PriceInput = props => {
	return <Input {...props} value={props.field.value} prefix="$" />
}


const NumberFormatInput = ({ onValueChange, ...rest }) => {
	return (
		<NumberFormat
			customInput={Input}
			type="text"
			onValueChange={onValueChange}
			autoComplete="off"
			{...rest}
		/>
	)
}

const PricingFields = props => {

	const { touched, errors } = props

	return (
		<AdaptableCard className="mb-4" >
			<h5 className="mb-5">Giá bán</h5>

			<div className="col-span-2">
				<FormItem
					label="Giá sản phẩm"
					invalid={errors.price && touched.price}
					errorMessage={errors.price}
				>
					<Field name="price">
						{({ field, form }) => {
							return (
								<NumberFormatInput
									form={form}
									field={field}
									placeholder="Price"
									customInput={PriceInput}
									onValueChange={e => {
										form.setFieldValue(field.name, e.value)
									}}
								/>
							)
						}}
					</Field>
				</FormItem>
			</div>

		</AdaptableCard>
	)
}

export default PricingFields