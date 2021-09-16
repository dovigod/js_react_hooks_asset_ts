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

export default useConfirm;

/*const reject = () => console.log('rejected');
	const deleteWorld = () => console.log('deleting world...');
	const deleteConfirm = useConfirm('delete World??', deleteWorld, reject) as React.MouseEventHandler; */
