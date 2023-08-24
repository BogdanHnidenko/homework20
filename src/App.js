import './App.css';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import SignIn from './Pages/signIn/SignIn';
import SignUp from './Pages/signUp/SignUp';

function App() {


	return (
		<BrowserRouter>
			<div className="App">
				<Link to='/signIn'>Sign in</Link>
				<Link to='/signUp'>Sign up</Link>
			</div>
			<div className="App__sign">
				<Routes>
					<Route path='signIn' element={<SignIn />} />
					<Route path='signUp' element={<SignUp />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
