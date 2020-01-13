import { r, IInputPaths } from './util';
import _set from 'set-value';
import { ITSKeys } from 'ts-type/lib/type/base';

export function set<T, D>(target: T, paths: IInputPaths, value: D): T
export function set<T, K extends keyof T, D extends T[K]>(target: T, paths: K, value: D): T
export function set<T, D>(target: T, paths: IInputPaths, value: D): T
{
	r(_set, target, paths, value)
	return target
}

export default set
