import React from 'react'
import { Input, Button, FormItem, FormContainer, Alert } from 'components/ui'
import { PasswordInput } from 'components/shared'
import useTimeOutMessage from 'utils/hooks/useTimeOutMessage'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import useAuth from 'utils/hooks/useAuth'
import isEmailValidator from 'validator/lib/isEmail';

const validationSchema = Yup.object().shape({
	email: Yup
		.string()
		.email("Email của bạn không đúng định dạng")
		.required("Vui lòng nhập Email của bạn")
		.test("is-valid", (message) => `${message.path} không đúng định dạng`, (value) => value ? isEmailValidator(value) : new Yup.ValidationError("Không đúng định dạng")),
	password: Yup.string().required('Vui lòng nhập mật khẩu của bạn'),
})

const SignInForm = props => {

	const {
		disableSubmit = false,
		className,
	} = props

	const [message, setMessage] = useTimeOutMessage()

	const { signIn } = useAuth()

	const onSignIn = async (values, setSubmitting) => {
		const { email, password } = values
		setSubmitting(true)

		const result = await signIn({ email, password })

		if (result.status === 'failed') {
			setMessage(result.message)
		}

		setSubmitting(false)
	}

	return (
		<div className={className}>
			{message && <Alert className="mb-4" type="danger" showIcon>{message}</Alert>}
			<Formik
				// Remove this initial value
				initialValues={{
					email: '',
					password: '',
					rememberMe: true
				}}
				validationSchema={validationSchema}
				onSubmit={(values, { setSubmitting }) => {
					if (!disableSubmit) {
						onSignIn(values, setSubmitting)
					} else {
						setSubmitting(false)
					}
				}}
			>
				{({ touched, errors, isSubmitting }) => (
					<Form>
						<FormContainer>
							<FormItem
								label="Email"
								invalid={errors.email && touched.email}
								errorMessage={errors.email}
							>
								<Field
									type="text"
									autoComplete="off"
									name="email"
									placeholder="Email"
									component={Input}
								/>
							</FormItem>
							<FormItem
								label="Mật khẩu"
								invalid={errors.password && touched.password}
								errorMessage={errors.password}
							>
								<Field
									autoComplete="off"
									name="password"
									placeholder="Password"
									component={PasswordInput}
								/>
							</FormItem>
							<Button block loading={isSubmitting} variant="solid" type="submit">
								{isSubmitting ? 'Đang vào...' : 'Đăng nhập'}
							</Button>
						</FormContainer>
					</Form>
				)}
			</Formik>
		</div>
	)
}

export default SignInForm