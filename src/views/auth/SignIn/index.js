import React from 'react'
import SignInForm from './SignInForm'

const SignIn = () => {
	return (
		<div style={containerSignInForm}>
			<h3 className="mb-5 text-center">Đăng nhập</h3>
			<SignInForm disableSubmit={false} />
		</div>
	)
}

export default SignIn

const containerSignInForm = {
	height: "500px",
	width: "350px",
	margin: "25vh auto"
}