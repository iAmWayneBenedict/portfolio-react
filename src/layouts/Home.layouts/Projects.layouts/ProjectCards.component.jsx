import React from "react";

const ProjectCards = ({ src }) => {
	return (
		<div className="w-full min-w-[25rem] md:min-w-[40rem] h-full flex flex-col z-20">
			<div className="w-full basis-11/12">
				<img src={src} className="bg-gray-300 w-full h-full object-cover border-0" alt="" />
			</div>
			<div className="basis-1/12 flex items-center">
				<span className="text-lg">Sample</span>
			</div>
		</div>
	);
};

export default ProjectCards;
