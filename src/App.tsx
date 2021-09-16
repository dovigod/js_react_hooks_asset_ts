import React, { useState, useEffect, useRef } from 'react';

import './App.css';

const useConfirm = (text: string = '', callback: Function, rejection?: Function): Function => {
	const confirmAction = () => {
		if (window.confirm(text)) {
			callback(text);
		} else {
			if (rejection) {
				rejection();
			}
		}
	};

	return confirmAction;
};
const App = () => {
	const reject = () => console.log('rejected');
	const deleteWorld = () => console.log('deleting world...');
	const deleteConfirm = useConfirm('delete World??', deleteWorld, reject) as React.MouseEventHandler;

	return (
		<>
			<div>Hi</div>
			<button onClick={deleteConfirm}>Delete World</button>
		</>
	);
};

export default App;
