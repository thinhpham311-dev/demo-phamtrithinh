import React from 'react'
import { AdaptableCard, RichTextEditor } from 'components/shared'
import { Input, FormItem } from 'components/ui'
import { Field } from 'formik'

export const categories = [
	{ label: 'Bags', value: 'bags' },
	{ label: 'Cloths', value: 'cloths' },
	{ label: 'Devices', value: 'devices' },
	{ label: 'Shoes', value: 'shoes' },
	{ label: 'Watches', value: 'watches' }
]

const BasicInformationFields = props => {

	const { touched, errors } = props

	return (
		<AdaptableCard className="mb-4" divider>
			<h5 className="mb-5">Thông tin chi tiết</h5>
			<FormItem
				label="Tên sản phẩm"
				invalid={errors.name && touched.name}
				errorMessage={errors.name}
			>
				<Field
					type="text"
					autoComplete="off"
					name="name"
					placeholder="Name"
					component={Input}
				/>
			</FormItem>
			<FormItem
				label="Mã sản phẩm"
				invalid={errors.code && touched.code}
				errorMessage={errors.code}
			>
				<Field
					type="text"
					autoComplete="off"
					name="code"
					placeholder="Code"
					component={Input}
				/>
			</FormItem>
			<FormItem
				label="Mô tả"
				labelClass="!justify-start"
				invalid={errors.description && touched.description}
				errorMessage={errors.description}
			>
				<Field name="description">
					{({ field, form }) => (
						<RichTextEditor
							value={field.value}
							onChange={val => form.setFieldValue(field.name, val)}
						/>
					)}
				</Field>
			</FormItem>
		</AdaptableCard>
	)
}

export default BasicInformationFields