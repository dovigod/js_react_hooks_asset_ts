import { useEffect, useRef } from 'react';
const useClick = (onclick: Function): any => {
	const element = useRef<any>(); //like getElementById

	useEffect(() => {
		if (element.current) {
			element.current.addEventListener('click', onclick);
			console.log('start');
		}
		console.log('mid');

		/// dep 존재시, 여기까지만 실행 , unmount시, 아래 시행
		return () => {
			console.log('ret');
			if (element.current) {
				element.current.removeEventListener('click', onclick);
			}
		};
	});
	//dependency 존재 안하면, willmount , did update때 계속 콜백 실행, 존재시, willmount 단계에서만 실행
	return element;
};

export default useClick;
