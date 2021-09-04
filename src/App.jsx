import './App.css';
import NavbarComponent from './component/item/NavbarComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeContext } from './context/darkmode';
import { useState } from 'react'
import { Home } from './component/page/Home';

function App() {
	const [darkMode, setDarkMode] = useState(true)
	return (
		<ThemeContext.Provider value={{ darkMode: darkMode, setDarkMode: setDarkMode }} >
			<Router>
				<NavbarComponent />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/about">
						<div style={{minHeight: "91.5vh"}} className={` ${darkMode && "bg-secondary"}`}></div>
					</Route>
				</Switch>
			</Router>
		</ThemeContext.Provider>
	);
}

export default App;
