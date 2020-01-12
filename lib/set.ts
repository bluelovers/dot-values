import { r, p } from './util';
import _set from 'set-value';

/**
 * @param {Object} target
 * @param {String} path
 * @param {*}      value
 * @return {Object}
 */
export function set<T, D>(target: T, path: string | string[], value: D): T
export function set<T, K extends keyof T, D extends T[K]>(target: T, path: K, value: D): T
export function set<T, D>(target: T, path: string | string[], value: D): T
{
	r(_set, target, p(path), value)
	return target
}

export default set
