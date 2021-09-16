import React, { useState, useEffect, useRef, SyntheticEvent } from 'react';

import './App.css';

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
const App = () => {
	const onclick = (e: React.MouseEvent): void => {
		console.log(1);
		console.log(e);
	};
	const target = useClick(onclick);
	return (
		<>
			<div>Hi</div>
			<h1 ref={target}>hello!!</h1>
		</>
	);
};

export default App;
