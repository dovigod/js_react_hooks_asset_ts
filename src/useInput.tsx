import { useState } from 'react';

export const useInput = (initialValue: string = 'none', validator: Function) => {
	const [value, setValue] = useState(initialValue);
	const onChange = (e: any) => {
		const {
			target: { value }
		} = e;
		let willUpdate: boolean = true;
		willUpdate = validator(value);
		if (willUpdate) {
			setValue(value);
		}
	};
	return { value, onChange };
};
