import icon from '../../img/padlock.png';
import { useState } from 'react';
import {
	IconDiv,
	IconImg,
	H2Text,
	Form,
	Div,
	CheckBox,
	CheckInfo,
	SignButton,
	HelpSign,
	Text,
	Input,
} from '../../Style/Style';



export default function SignUp() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");

	const isEmailValid = /^[a-zA-Z0-9._%+-]{3,}@[a-zA-Z0-9-]{2,}\.[a-zA-Z]{2,}$/.test(email);
	const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
	const isFirstNameValid = /^[a-zA-Zа-яА-ЯіїєґІЇЄҐ']{3,}$/.test(firstName);
	const isLastNameValid = /^[a-zA-Zа-яА-ЯіїєґІЇЄҐ']{3,}$/.test(lastName);

	const HandleSignUp = (e) => {
		e.preventDefault();

		if (email && password && firstName && lastName) {
			const userData = {
				firstName,
				lastName,
				email,
				password,
			};

			localStorage.setItem("userData", JSON.stringify(userData));
			alert("Ви зареєстровані");
		}
	};


	return (
		<>
			<IconDiv>
				<IconImg src={icon} alt='icon' />
			</IconDiv>
			<H2Text>Sign up</H2Text>
			<Form onSubmit={HandleSignUp}>
				<Div display='flex' gap='20px' >
					<Input color={isFirstNameValid ? 'valid' : (firstName.length === 0) ? '' : 'invalid'} onChange={(elem) => { setFirstName(elem.target.value) }} flex='50%' placeholder='First name' />
					<Input color={isLastNameValid ? 'valid' : (lastName.length === 0) ? '' : 'invalid'} onChange={(elem) => { setLastName(elem.target.value) }} flex='50%' placeholder='Last name' />
				</Div>
				<Div display='flex' wrap="wrap" >
					<Input color={isEmailValid ? 'valid' : (email.length === 0) ? '' : 'invalid'} onChange={(elem) => { setEmail(elem.target.value) }} flex='100%' placeholder='Email address' type='email' />
					<Input color={isPasswordValid ? 'valid' : (password.length === 0) ? '' : 'invalid'} onChange={(elem) => { setPassword(elem.target.value) }} flex='100%' placeholder='Password' type='password' />
				</Div>
				<Div display='flex' gap='10px' marginBottom='20px'>
					<CheckBox id='checkbox' type="checkbox" />
					<CheckInfo for="checkbox">I want to receive inspiration, marketing promotions and updates via email</CheckInfo>
				</Div>
				<SignButton>SIGN UP</SignButton>
				<Div display='flex' flexEnd='end'>
					<HelpSign to="/" >Already have an account? Sign in</HelpSign>
				</Div>
			</Form>
			<Text>Copyright © Your Website 2023</Text>
		</>
	)
}