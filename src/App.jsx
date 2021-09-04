import './App.css';
import NavbarComponent from './component/item/NavbarComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeContext } from './context/darkmode';
import { useState } from 'react'
import { Home } from './component/page/Home';
import { Alert } from './component/util/Alert';
import AlertContext from './context/alertContext';

function App() {
	const [darkMode, setDarkMode] = useState(true)
	const [alert, setAlert] = useState(null)

	const showAlert = (msg) => {
		setAlert(msg)
		setTimeout(() => setAlert(null), 1500)
	}

	return (
		<ThemeContext.Provider value={{ darkMode: darkMode, setDarkMode: setDarkMode }} >
			<AlertContext.Provider value={showAlert}>
				<Router>
					<NavbarComponent />
					<Alert >{alert}</Alert>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/about">
							<div style={{ minHeight: "91.5vh" }} className={` ${darkMode && "bg-secondary"}`}></div>
						</Route>
					</Switch>
				</Router>
			</AlertContext.Provider>
		</ThemeContext.Provider>
	);
}

export default App;
