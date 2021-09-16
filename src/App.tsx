import React, { useState, useEffect, useRef } from 'react';

import './App.css';

const usePreventLeave = (): { enablePrevent: Function; disablePrevent: Function } => {
	const listener = (e: Event) => {
		e.preventDefault();
		e.returnValue = true; // deprecated , but chrome needs
	};
	const enablePrevent = (): any => {
		window.addEventListener('beforeunload', listener);
	};
	const disablePrevent = (): any => {
		window.removeEventListener('beforeunload', listener);
	};
	return { enablePrevent, disablePrevent };
};

const App = () => {
	const { enablePrevent, disablePrevent } = usePreventLeave();

	return (
		<>
			<div>Hi</div>
			<button onClick={enablePrevent}>protect</button>
			<button onClick={disablePrevent}>unprotect</button>
		</>
	);
};

export default App;
