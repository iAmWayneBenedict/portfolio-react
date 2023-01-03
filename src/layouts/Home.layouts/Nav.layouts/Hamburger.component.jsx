import React, { useRef } from "react";
import { useEffect, useState } from "react";

const Hamburger = () => {
	const topLine = useRef(null);
	const bottomLine = useRef(null);

	const [active, setActive] = useState(false);

	let handleClick;
	let handleMouseOver;
	let handleMouseLeave;

	useEffect(() => {
		handleClick = (event) => {
			let top = event.currentTarget.children[0];
			let bottom = event.currentTarget.children[1];

			top.style.transform = "rotate(0deg)";
			bottom.style.transform = "rotate(0deg)";

			if (active) {
				top.style.top = "3px";
				bottom.style.bottom = "3px";

				setActive(false);
			} else {
				top.style.top = "50%";
				top.style.transform = "translateY(-50%)";

				bottom.style.bottom = "50%";
				bottom.style.transform = "translateY(-50%)";
				setActive(true);
			}
		};

		handleMouseOver = (event) => {
			if (!active) return;

			let top = event.currentTarget.children[0];
			let bottom = event.currentTarget.children[1];

			top.style.transformOrigin = "center center";
			top.style.transform = "rotate(35deg)";
			bottom.style.transform = "rotate(-35deg)";
			bottom.style.transformOrigin = "center center";
		};

		handleMouseLeave = (event) => {
			if (!active) return;

			let top = event.currentTarget.children[0];
			let bottom = event.currentTarget.children[1];
			top.style.transform = "rotate(0deg)";
			bottom.style.transform = "rotate(0deg)";
		};
	}, [active]);

	const handleTransitionEnd = (event) => {
		if (!event.currentTarget) return;

		// (event.currentTarget as HTMLSpanElement).style.opacity = "0";
	};

	return (
		<button
			onClick={(e) => handleClick(e)}
			onMouseOver={(e) => handleMouseOver(e)}
			onMouseLeave={(e) => handleMouseLeave(e)}
			className="h-[20px] w-[40px] cursor-pointer transition-all opacity-100 relative"
		>
			<span
				ref={topLine}
				className="h-[1px] w-full bg-black absolute top-[3px] left-0 transition-all duration-500"
			></span>
			<span
				ref={bottomLine}
				onTransitionEnd={(e) => handleTransitionEnd(e)}
				className="h-[1px] w-full bg-black absolute bottom-[3px] left-0 transition-all duration-500"
			></span>
		</button>
	);
};

export default Hamburger;
