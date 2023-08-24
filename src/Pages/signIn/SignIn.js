import icon from '../../img/padlock.png';
import { useEffect, useState } from 'react';
import {
	Input,
	IconDiv,
	IconImg,
	H2Text,
	Form,
	Div,
	CheckBox,
	CheckInfo,
	SignButton,
	HelpSign,
	Text
} from '../../Style/Style';



export default function SignIn() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [remember, setRemember] = useState(false);

	const isEmailValid = /^[^\s@]{3,}@[^@]{2,}\.[^@]{2,}$/.test(email);
	const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);


	const HandleRememberCheckbox = (e) => {
		const currentValue = e.target.checked;
		setRemember(currentValue);
		localStorage.setItem("remember", currentValue.toString());

		if (!currentValue) {
			localStorage.removeItem("rememberEmail");
			localStorage.removeItem("rememberPassword");
		}
	};

	const InputChange = (e) => {
		e.preventDefault();

		if (remember) {
			localStorage.setItem("rememberEmail", email);
			localStorage.setItem("rememberPassword", password);
		}

		const userDataFromStorage = localStorage.getItem("userData");
		if (userDataFromStorage) {
			const userData = JSON.parse(userDataFromStorage);
			if (userData.email && userData.password) {
				if (userData.email === email && userData.password === password) {
					alert(`Привіт, ${userData.firstName} ${userData.lastName}!`);
				} else {
					alert("Перевірте чи вірно вказані password або email");
				}
			} else {
				alert("Ви не зареєстровані");
			}
		}
	};

	useEffect(() => {
		const storedRemember = localStorage.getItem('remember');
		if (storedRemember) {
			setRemember(storedRemember === 'true');
		}

		if (remember) {
			const storedEmail = localStorage.getItem('rememberEmail');
			if (storedEmail) {
				setEmail(storedEmail);
			}

			const storedPassword = localStorage.getItem('rememberPassword');
			if (storedPassword) {
				setPassword(storedPassword);
			}
		}
	}, [remember]);



	return (
		<>
			<IconDiv>
				<IconImg src={icon} alt='icon' />
			</IconDiv>
			<H2Text>Sign in</H2Text>
			<Form onSubmit={InputChange}>
				<Div display='flex' wrap="wrap" >
					<Input color={isEmailValid ? 'valid' : (email.length === 0) ? '' : 'invalid'} onChange={(elem) => { setEmail(elem.target.value) }} flex='100%' placeholder='Email address' value={email} type='email' />
					<Input color={isPasswordValid ? 'valid' : (password.length === 0) ? '0' : 'invalid'} onChange={(elem) => { setPassword(elem.target.value) }} flex='100%' placeholder='Password' value={password} type='password' />
				</Div>
				<Div display='flex' gap='10px' marginbottom='20px'>
					<CheckBox id='checkbox' type="checkbox" onChange={HandleRememberCheckbox} />
					<CheckInfo for="checkbox">Remember me</CheckInfo>
				</Div>
				<SignButton>SIGN IN</SignButton>
				<Div display='flex' gap='30px'>
					<HelpSign to="" >Forgot password?</HelpSign>
					<HelpSign to="/signUp" >Don`t have an account? Sign Up</HelpSign>
				</Div>
			</Form>
			<Text>Copyright © Your Website 2023</Text>
		</>
	)
}