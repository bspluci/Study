import React, { Component } from 'react';
import AuthModal from '../components/auth/AuthModal';

class LoginPage extends Component {
	render() {
		return <AuthModal type="login" />;
	}
}

export default LoginPage;
