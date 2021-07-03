import { r } from './util';
import _set from 'set-value';
export function set(target, paths, value, options) {
    r(_set, target, paths, value);
    return target;
}
export default set;
//# sourceMappingURL=set.js.map