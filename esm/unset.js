import { b, r } from './util';
//import _unset from "unset-value";
import _unset from "./core/unset";
export function unset(target, paths) {
    return b(r(_unset, target, paths));
}
export default unset;
//# sourceMappingURL=unset.js.map