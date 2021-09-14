import React, { useState, useEffect } from 'react';

import './App.css';
const useInput = (initialValue: string = 'none', validator: Function) => {
	const [value, setValue] = useState(initialValue);
	const onChange = (e: any) => {
		const {
			target: { value }
		} = e;

		console.log(value);
		let willUpdate: boolean = true;

		willUpdate = validator(value);
		if (willUpdate) {
			setValue(value);
		}
	};

	return { value, onChange };
};

const useTab = () => {};

const content = [
	{
		tab: 'Section 1',
		content: "I'm the content of Section 1"
	},
	{
		tab: 'Section 2',
		content: "I'm the content of Section 2"
	}
];
const App = () => {
	const maxLen = (value: string): boolean => {
		console.log(value.length);
		return value.length < 10;
	};
	const name = useInput('Mr.', maxLen);

	return (
		<>
			<h1>Hello {name.value}</h1>
			<input placeholder="Name" {...name}></input>
		</>
	);
};

export default App;

// import List from './List';
// interface tState {
// 	states: {
// 		foo: number;
// 		bar?: string;
// 	}[];
// }

// const App: React.FC = () => {
// 	const [alpha, fixAlpha] = useState<tState['states']>([{ foo: 3, bar: 'hello' }]);
// 	return (
// 		<>
// 			<div className="container">
// 				<span>hello</span>
// 				<List states={alpha} />
// 			</div>
// 		</>
// 	);
// };
// export default App;

/*
const useInput = (initialValue: string = 'none', validator: Function) => {
	const [value, setValue] = useState(initialValue);
	const onChange = (e: any) => {
		const {
			target: { value }
		} = e;

		console.log(value);
		let willUpdate: boolean = true;

		willUpdate = validator(value);
		if (willUpdate) {
			setValue(value);
		}
	};

	return { value, onChange };
};
*/
