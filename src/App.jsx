import { useEffect, useState, useRef } from "react";
import Home from "./pages/Home.page";
import Nav from "./layouts/Home.layouts/Nav.layouts/Nav.layout";
import gsap from "gsap";
import useLocoScroll from "./hooks/useLocoScroll";

// locomotive scroll css
// import "locomotive-scroll/dist/locomotive-scroll.min.css";
import TextCursor from "./components/ui/TextCursor.component";
import Cursor from "./components/ui/Cursor.component";

function App() {
	// const isDarkMode = () => window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");

	// const icon = document.querySelector("link[rel=icon]");

	// useEffect(() => {
	// 	isDarkMode().matches
	// 		? icon?.setAttribute("href", "/logo-darkmode.svg")
	// 		: icon?.setAttribute("href", "/logo-lightmode.svg");
	// }, []);

	useLocoScroll(true);

	return (
		<div className="App bg-white relative" id="App">
			{/* <TextCursor /> */}
			{/* <Cursor /> */}
			<div id="smooth-wrapper">
				<Nav />
				<Home />
			</div>
		</div>
	);
}

export default App;
