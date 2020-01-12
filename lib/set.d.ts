/**
 * @param {Object} target
 * @param {String} path
 * @param {*}      value
 * @return {Object}
 */
export declare function set<T, D>(target: T, path: string | string[], value: D): T;
export declare function set<T, K extends keyof T, D extends T[K]>(target: T, path: K, value: D): T;
export default set;
