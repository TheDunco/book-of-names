export const protectUndefined = (value: string | number | undefined) => value?.toString() ?? '';
