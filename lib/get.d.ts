import { IInputPaths } from './util';
export declare function get<T, D = T>(target: object, paths: IInputPaths, defaultValue?: D): T | D | (T | D)[];
export default get;
