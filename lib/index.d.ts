import get from './get';
import set from './set';
import has from './has';
import unset from './unset';
export { get, set, has, unset, };
export { get as getValue, set as setValue, has as hasValue, unset as unsetValue, };
declare const _default: {
    get: typeof get;
    set: typeof set;
    has: typeof has;
    unset: typeof unset;
};
export default _default;
