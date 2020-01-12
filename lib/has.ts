import { b, r, p } from './util';
import _has from "has-value";

/**
 * @param  {Object}  target
 * @param  {String}  path
 * @return {Boolean}
 */
export function has(target: object, path: string | string[]): boolean
{
	return b(
		r(_has, target, p(path)),
	)
}

export default has
