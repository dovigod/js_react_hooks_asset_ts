import React, { useState, useEffect } from 'react';

import './App.css';

const useTitle = (initialTitle: string): any => {
	const [title, setTitle] = useState(initialTitle);

	const updateTitle = () => {
		const htmlTitle = document.querySelector('title') as HTMLElement;
		// asserting..
		htmlTitle.innerText = title;
	};
	useEffect(updateTitle, [title]); //didmount , willupdate , willunmount
	return setTitle;
};

const App = () => {
	const titleUpdater = useTitle('Loading Title..');
	setTimeout(() => titleUpdater('Home'), 5000);
	return (
		<>
			<div>Hi</div>
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
