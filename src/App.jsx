import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Gallery from "./pages/Gallery/Gallery";
import Pricing from "./pages/Pricing/Pricing";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "./components/utils/ScrollToTop"; // Import ScrollToTop

function App() {
	return (
		<BrowserRouter
			future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
		>
			<ScrollToTop />
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/gallery" element={<Gallery />} />
					<Route path="/pricing" element={<Pricing />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<h1>ERROR 404 - NOT FOUND</h1>} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
