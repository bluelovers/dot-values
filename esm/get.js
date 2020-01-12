import { r, p } from './util';
import _get from 'get-value';
/**
 * @param  {Object} target
 * @param  {String} path
 * @param  {*}      value
 * @return {*}
 */
export function get(target, path, defaultValue) {
    return r(_get, target, p(path), { default: defaultValue });
}
export default get;
//# sourceMappingURL=get.js.map