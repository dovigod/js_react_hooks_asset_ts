//https://developer.mozilla.org/ko/docs/Web/API/notification

const useNotification = (title: string, options?: object) => {
	if (!('Notification' in window)) {
		alert('no notifications...');
		return;
	}

	const fireNotification = (): any => {
		if (Notification.permission !== 'granted') {
			Notification.requestPermission().then((permission) => {
				if (permission === 'granted') {
					new Notification(title, options);
				} else {
					return;
				}
			});
		} else {
			new Notification(title, options);
		}
	};

	return fireNotification;
};

export default useNotification;
