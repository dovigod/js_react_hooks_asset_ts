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

export default usePreventLeave;
