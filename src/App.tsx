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
interface Section {
	tab: string;
	content: string;
}
const content: Array<Section> = [
	{
		tab: 'Section 1',
		content: "I'm the content of Section 1"
	},
	{
		tab: 'Section 2',
		content: "I'm the content of Section 2"
	}
];

const useTabs = (initialTab: number, allTabs: Array<Object>): any => {
	const [currentIndex, setCurrentIndex] = useState<number>(initialTab);

	return {
		currentItem: allTabs[currentIndex],
		changeItem: setCurrentIndex
	};
};
const App = () => {
	const { currentItem, changeItem } = useTabs(0, content);
	return (
		<>
			{content.map((section, index) => (
				<button onClick={() => changeItem(index)}>{section.tab}</button>
			))}
			<div>{currentItem.content}</div>
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
