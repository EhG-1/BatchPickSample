import { useState } from 'react';
import './App.css';
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DataManagement, UserRoles, UserDetails } from "./pages/DataManagement";
import { MasterData, Items, Orders, Inventory } from "./pages/MasterData";
import Support from "./pages/Support";
import Logout from "./pages/Logout";
import onsemi_logo_t_full_color from "./images/onsemi_logo_final_t_reverse.png";
import styled from "styled-components";

const LogoHeader = styled.div`
background: #465e66;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
font-size: 18px;
color: #f5f5f5;
text-align: right;
`;

function App() {
const [userid, setuserid] = useState('');
const [password, setPassword] = useState('');
const [isLoggedin, setIsLoggedin] = useState(false);

const login = (e) => {
	e.preventDefault();
	console.log(userid, password);
	const userData = {
	userid,
	password,
	};
	localStorage.setItem('token-info', JSON.stringify(userData));
	setIsLoggedin(true);
	setuserid('');
	setPassword('');
};

const logout = () => {
	localStorage.removeItem('token-info');
	setIsLoggedin(false);
};

return (
	<>
	<div>
		{!isLoggedin ? (
			<>
			<LogoHeader>
			<img src={onsemi_logo_t_full_color} alt="onsemi_logo" height="80" display="flex" />
			</LogoHeader>
			
			<h2>Welcome to Logistics Allocation System</h2><br/>
					<form action="">
			Username:
					<input
						type="text"
						onChange={(e) => setuserid(e.target.value)}
						value={userid}
						placeholder="Name"
					/><br/>
			Password: 
					<input
						type="password"
						onChange={(e) => setPassword(e.target.value)}
						value={password}
						placeholder="Password"
					/><br/><br/>
					<button type="submit" onClick={login}>
						LOGIN
					</button>
					</form>
			</>
		) : (
		<>
			<Router>
			<Sidebar />
			<Routes>
				<Route path="/data-management" element={<DataManagement/>} />
				<Route path="/data-management/userRoles" element={<UserRoles/>} />
				<Route path="/data-management/userDetails" element={<UserDetails/>} />
				<Route path="/masterData" element={<MasterData/>} />
				<Route path="/masterData/items" element={<Items/>} />
				<Route path="/masterData/orders" element={<Orders/>} />
				<Route path="/masterData/inventory" element={<Inventory/>} />
				<Route path="/support" element={<Support/>} />
				<Route path="/" element={<Logout/>} />
			</Routes>
			</Router>
		</>
		)}
	</div>
	</>
);
}

export default App;
