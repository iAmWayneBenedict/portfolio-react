import React, { useRef } from "react";
import { useEffect } from "react";

const TextCursor = () => {
	let circle = useRef(null);
	const handleMouseMove = (event) => {
		if (!circle.current) return;

		console.log(event.currentTarget, event.clientY);
		circle.current.style.top = `${event.pageY - 50}px`;
		circle.current.style.left = `${event.pageX - 45}px`;
	};

	useEffect(() => {
		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);
	return (
		<div className="fixed top-10 left-0 h-screen w-screen ">
			<div className="relative bg-red-200 h-full w-full">
				<div
					ref={circle}
					className="absolute w-[100px] animate-[spin_10s_linear_infinite] pointer-events-none z-50"
				>
					<svg xmlns="http://www.w3.org/2000/svg" lang="en" viewBox="0 0 500 500">
						{/* <title>Circular Text Path</title> */}

						<defs>
							<path
								id="textcircle"
								d="M250,400
        a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
								transform="rotate(12,250,250)"
							/>
						</defs>
						<rect width="100%" height="100%" fill="none" />
						<text className="text-[4em] font-bold">
							<textPath
								href="#textcircle"
								aria-label="All for One &amp; One for All"
								textLength="942"
							>
								VIEW THE EXPERIENCE.
							</textPath>
						</text>
					</svg>
				</div>
			</div>
		</div>
	);
};

export default TextCursor;
