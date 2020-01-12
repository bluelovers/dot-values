import { r, p } from './util';
import _set from 'set-value';
export function set(target, path, value) {
    r(_set, target, p(path), value);
    return target;
}
export default set;
//# sourceMappingURL=set.js.map