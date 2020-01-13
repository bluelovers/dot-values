import { b, r, IInputPaths } from './util';
//import _unset from "unset-value";
import _unset from "./core/unset";

export function unset(target: object, paths: IInputPaths): boolean
{
	return b(
		r(_unset, target, paths),
	)
}

export default unset
