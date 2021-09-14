import React, { useState, useEffect } from 'react';

import './App.css';

const App = () => {
	const [item, setItem] = useState<number>(0);
	const incrementItem = () => setItem(item + 1);
	const decrementItem = () => setItem(item - 1);

	return (
		<>
			<h1>Hello {item}</h1>
			<button onClick={incrementItem}>increase</button>
			<button onClick={decrementItem}>decrease</button>
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
