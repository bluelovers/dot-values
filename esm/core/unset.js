/**
 * Created by user on 2020/1/13.
 */
import isObject from 'isobject';
import splitString from 'split-string';
export function _unset(obj, paths) {
    if (!isObject(obj)) {
        throw new TypeError(`expected an object. but got ${obj}`);
    }
    if (!Array.isArray(paths)) {
        paths = splitString(paths);
    }
    else {
        paths = paths.slice();
    }
    let prop;
    let target = obj;
    let latest = paths.pop();
    for (prop of paths) {
        if (prop in target) {
            target = target[prop];
        }
        else {
            return true;
        }
    }
    if (latest in target) {
        return (delete target[latest]);
    }
    return true;
}
export default _unset;
//# sourceMappingURL=unset.js.map