import { r, IInputPaths } from './util';
import _get from 'get-value';

export function get<T, D = T>(target: object, paths: IInputPaths, defaultValue?: D): T | D | (T | D)[]
{
	return r(_get, target, paths, { default: defaultValue })
}

export default get
