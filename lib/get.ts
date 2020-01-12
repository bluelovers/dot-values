import { r, p } from './util';
import _get from 'get-value';

/**
 * @param  {Object} target
 * @param  {String} path
 * @param  {*}      value
 * @return {*}
 */
export function get<T, D = T>(target: object, path: string | string[], defaultValue?: D)
{
	return r<D | T>(_get, target, p(path), { default: defaultValue })
}

export default get