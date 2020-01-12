import { b, r, p } from './util';
import _has from "has-value";
/**
 * @param  {Object}  target
 * @param  {String}  path
 * @return {Boolean}
 */
export function has(target, path) {
    return b(r(_has, target, p(path)));
}
export default has;
//# sourceMappingURL=has.js.map