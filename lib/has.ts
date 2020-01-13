import { b, r, IInputPaths } from './util';
import _has from "has-value";

export function has(target: object, paths: IInputPaths): boolean
{
	return b(
		r(_has, target, paths),
	)
}

export default has
