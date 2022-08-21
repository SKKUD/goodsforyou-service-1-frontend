import { useState, useEffect } from 'react';

const useLocalStorage = (key, defaultValue, type) => {
	const [value, setValue] = useState(() => {
		let currentValue;

		try {
			if (type !== 'array') {
				currentValue = JSON.parse(
					localStorage.getItem(key) || String(defaultValue)
				);
			} else {
				currentValue = defaultValue;
			}
		} catch (error) {
			currentValue = defaultValue;
		}

		return currentValue;
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [value, key]);

	return [value, setValue];
};

export default useLocalStorage;