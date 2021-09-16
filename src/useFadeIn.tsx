import { useRef, useEffect } from 'react';

const useFadeIn = (time: number = 1, timingFunction: string, delay: number = 0) => {
	const element = useRef<HTMLHeadingElement>(null);
	useEffect(() => {
		console.dir(typeof element.current);
		if (element.current) {
			const { current } = element as any;
			current.style.transition = `opacity ${time}s ${timingFunction} ${delay}s`;
			current.style.opacity = 1;
		}
	}, []);
	return {
		ref: element,
		style: { opacity: 0 }
	};
};

export default useFadeIn;

/*
const el = useFadeIn(0.5, 'ease-in-out', 0);
	const p = useFadeIn(3, 'ease-in-out', 0.5);
<h1 {...el}>dops!</h1>
<p {...p}>heee</p>
 */
