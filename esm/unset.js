import { b, r, p } from './util';
import _unset from "unset-value";
/**
 * @param {Object} target
 * @param {String} path
 * @return {Boolean}
 */
export function unset(target, path) {
    return b(r(_unset, target, p(path)));
}
export default unset;
//# sourceMappingURL=unset.js.map