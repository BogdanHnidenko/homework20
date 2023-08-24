import styled from "styled-components";
import { Link } from 'react-router-dom'


export const Div = styled.div`
	display: ${(props) => props.display === 'flex' ? 'flex' : 'block'};
	gap: ${(props) => props.gap};
	align-items: center;
	margin-bottom: ${(props) => props.marginbottom};
	justify-content: ${(props) => props.flexEnd};
	flex-wrap: ${(props) => props.wrap}
`




// HEADER=================================================================
export const IconDiv = styled.div`
	display: flex;
	padding: 10px;
	background: #b3b1f3;
	border-radius: 50%;
`

export const IconImg = styled.img`
	display: inline-block;
	width: 40px;
	height: 40px;
`
export const H2Text = styled.h2`
	margin: 0 0 15px;
	color: white;
`


// INPUT=========================================================================
export const Input = styled.input`
	color: white;
	box-sizing: border-box;
	margin-bottom: 10px;
	border: 1px solid ${(props) => (props.color === 'valid' ? 'green' : props.color === 'invalid' ? 'red' : '#585858')};
	padding: 10px;
	flex: 0 1 ${(props) => props.flex};
	background: transparent;
	&::placeholder {
		color: white;
		font-family: Roboto;
	}
	&:focus {
		outline: 0;
	}
`


// FORM==========================================================================
export const Form = styled.form`

`
export const CheckBox = styled.input`
	width: 15px;
	height: 15px;
`

export const CheckInfo = styled.label`
	color: white;
	max-width: 250px;
`

export const SignButton = styled.button`
	width: 100%;
	padding: 10px;
	font-family: inherit;
	margin-bottom: 10px;
	background: #8047b1;
	color: white;
	border: none;
	border-radius: 20px;
	transition: 300ms;
	&:hover {
		background: #522d72;
	}
`
export const HelpSign = styled(Link)`
	display: inline-block;
	text-decoration: none;
	list-style: none;
	color: #2986cc;
`

export const Text = styled.p`
	color: #919191;
	margin: 25px 0 0;
	font-size: 12px
`
