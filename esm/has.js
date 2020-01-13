import { b, r } from './util';
import _has from "has-value";
export function has(target, paths) {
    return b(r(_has, target, paths));
}
export default has;
//# sourceMappingURL=has.js.map