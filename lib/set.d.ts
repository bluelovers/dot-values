import { IInputPaths } from './util';
export declare function set<T, D>(target: T, paths: IInputPaths, value: D): T;
export declare function set<T, K extends keyof T, D extends T[K]>(target: T, paths: K, value: D): T;
export default set;
