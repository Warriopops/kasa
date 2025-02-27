import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/page.jsx";
import Error from "./pages/Error/page.jsx";
import About from "./pages/About/page.jsx";
import Fiche from "./pages/Fiche/page.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
	return (
		<div className="App">
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="*" element={<Error />} />
					<Route path="/About" element={<About />} />
					<Route path="/fiche/:id" element={<Fiche />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;