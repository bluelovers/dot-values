/**
 * @param  {Object} target
 * @param  {String} path
 * @param  {*}      value
 * @return {*}
 */
export declare function get<T, D = T>(target: object, path: string | string[], defaultValue?: D): T | D | (T | D)[];
export default get;
