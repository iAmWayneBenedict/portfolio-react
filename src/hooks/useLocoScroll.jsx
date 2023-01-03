// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import { useEffect } from "react";
// import LocomotiveScroll from "locomotive-scroll";
// import "locomotive-scroll/src/locomotive-scroll.scss";
// import Scrollbar from "smooth-scrollbar";

// gsap.registerPlugin(ScrollTrigger);

// export default function useLocoScroll(start: boolean) {
// 	useEffect(() => {
// 		if (!start) return;
// 		let locoScroll: LocomotiveScroll | null = null;

// 		const scrollEl = document.querySelector(".App") as HTMLDivElement;
// 		const bodyScrollBar = Scrollbar.init(scrollEl, { damping: 0.1, delegateTo: document });

// 		// locoScroll = new LocomotiveScroll({
// 		// 	el: scrollEl,
// 		// 	smooth: true,
// 		// 	multiplier: 1,
// 		// 	class: "is-reveal",
// 		// });

// 		// locoScroll.on("scroll", () => {
// 		// 	ScrollTrigger.update();
// 		// });
// 		bodyScrollBar.setPosition(0, 0);
// 		bodyScrollBar.track.yAxis.element.remove();
// 		bodyScrollBar.track.xAxis.element.remove();
// 		ScrollTrigger.scrollerProxy(".App", {
// 			scrollTop(value) {
// 				console.log(value);
// 				if (arguments.length && value) {
// 					bodyScrollBar.scrollTop = value;
// 				}
// 				return bodyScrollBar.scrollTop;
// 			},
// 		});

// 		bodyScrollBar.addListener(ScrollTrigger.update);

// 		return () => {};
// 	}, [start]);
// }

// Test

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";

gsap.registerPlugin(ScrollTrigger);

export default function useLocoScroll(start) {
	useEffect(() => {
		if (!start) return;
		let locoScroll = null;

		const scrollEl = document.querySelector(".App");

		locoScroll = new LocomotiveScroll({
			el: scrollEl,
			smooth: true,
			multiplier: 1,
			class: "is-reveal",
		});

		locoScroll.on("scroll", () => {
			ScrollTrigger.update();
		});

		ScrollTrigger.scrollerProxy(scrollEl, {
			scrollTop(value) {
				if (locoScroll) {
					return arguments.length
						? locoScroll.scrollTo(value, 0, 0)
						: locoScroll.scroll.instance.scroll.y;
				}
				return null;
			},
			scrollLeft(value) {
				if (locoScroll) {
					return arguments.length
						? locoScroll.scrollTo(value, 0, 0)
						: locoScroll.scroll.instance.scroll.x;
				}
				return null;
			},
		});

		const lsUpdate = () => {
			if (locoScroll) {
				locoScroll.update();
			}
		};

		ScrollTrigger.addEventListener("refresh", lsUpdate);
		ScrollTrigger.refresh();

		return () => {
			if (locoScroll) {
				ScrollTrigger.removeEventListener("refresh", lsUpdate);
				locoScroll.destroy();
				locoScroll = null;
				console.log("Kill", locoScroll);
			}
		};
	}, [start]);
}
