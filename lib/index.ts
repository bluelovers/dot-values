import get from './get';
import set from './set';
import has from './has';
import unset from './unset';

export {
	get,
	set,
	has,
	unset,
}

export {
	get as getValue,
	set as setValue,
	has as hasValue,
	unset as unsetValue,
}

export {
	unset as delete,
	unset as deleteValue,
}

export default {
	get,
	set,
	has,
	unset,

	getValue: get,
	setValue: set,
	hasValue: has,
	unsetValue: unset,

	delete: unset,
	deleteValue: unset,
}
