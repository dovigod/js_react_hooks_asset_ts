import { useState, useEffect } from 'react';

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
