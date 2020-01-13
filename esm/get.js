import { r } from './util';
import _get from 'get-value';
export function get(target, paths, defaultValue) {
    return r(_get, target, paths, { default: defaultValue });
}
export default get;
//# sourceMappingURL=get.js.map