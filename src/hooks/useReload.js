import { useEffect } from 'react';

export const useReload = () => {
	const reloadCount = sessionStorage.getItem('reloadCount');
	const reload = sessionStorage.getItem('reload');
	useEffect(() => {
		if (reload === null) {
			console.log(reload);
			sessionStorage.setItem('reload', 1);
			//refreshes if logged out
			if (reloadCount < 2) {
				sessionStorage.setItem('reloadCount', String(reloadCount + 1));
				window.location.reload();
			} else {
				sessionStorage.removeItem('reloadCount');
			}
		}
	}, []);
};
