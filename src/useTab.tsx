import { useState } from 'react';
const useTabs = (initialTab: number, allTabs: Array<Object>): any => {
	const [currentIndex, setCurrentIndex] = useState<number>(initialTab);

	if (!allTabs || !Array.isArray(allTabs)) {
		return;
	}
	return {
		currentItem: allTabs[currentIndex],
		changeItem: setCurrentIndex
	};
};
