import React from "react";

const Dot = ({ number, y_position }) => {
	let y_pos = `top-[${y_position}%]`;

	return (
		<div
			className={`w-[25px] h-[25px] bg-white border-[14px] border-black absolute rounded-full left-1/2 -translate-x-1/2 ${y_pos} flex justify-center items-center`}
		>
			<span className="text-xl">{number}</span>
		</div>
	);
};

export default Dot;
