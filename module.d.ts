declare module 'has-value'
{
	function hasValue(object: object, path: string): boolean;

	export default hasValue;
}

declare module 'unset-value'
{
	function unsetValue(object: object, path: string): boolean;

	export default unsetValue;
}
