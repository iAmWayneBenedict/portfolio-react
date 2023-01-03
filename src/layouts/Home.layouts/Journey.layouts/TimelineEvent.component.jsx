import React from "react";

const TimelineEvent = ({ position, isEmpty, data }) => {
	let parentEl;
	let childH1;
	let childSpan;
	if (position === "left") {
		parentEl = " pr-5 justify-end";
		childH1 = "order-2";
		childSpan = "order-1";
	} else {
		parentEl = " pl-5";
		childH1 = "order-1";
		childSpan = "order-2";
	}

	return (
		<>
			{!isEmpty && (
				<div className={`flex-1 flex items-center gap-10 ${parentEl}`}>
					<h1 className={`text-4xl font-neueMontrealBold ${childH1}`}>{data?.year}</h1>
					<span className={childSpan}>{data?.desc}</span>
				</div>
			)}
			{isEmpty && <div className="flex-1 flex items-center"></div>}
		</>
	);
};

export default TimelineEvent;
