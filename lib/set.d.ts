import { IInputPaths } from './util';
import _set from 'set-value';
export declare function set<T, D>(target: T, paths: IInputPaths, value: D, options?: _set.Options): T;
export declare function set<T, K extends keyof T, D extends T[K]>(target: T, paths: K, value: D, options?: _set.Options): T;
export default set;
