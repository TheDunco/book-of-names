export const toInitialCase = (str?: string) => {
	if (!str) return '';
	return str.charAt(0).toUpperCase() + str.slice(1);
};
