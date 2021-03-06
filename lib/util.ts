/// <reference path="../module.d.ts" />
import _get, { Options } from 'get-value';
import _set from 'set-value';
import _has from 'has-value';
import _unset from 'unset-value';
import splitString from 'split-string';
// @ts-ignore
import escapeSplit from 'escape-split';
import { ITSKeys } from 'ts-type/lib/type/base';
import { IPathsInput } from './types';

const SymStar = Symbol('*');

export type IInputPaths = string | ITSKeys[];

const splitSpecific = escapeSplit({ delimiter: '.', escaper: '\\' });

export function r<T, F extends typeof _get | typeof _set | typeof _has | typeof _unset>(fn: F, target: unknown | unknown[], paths: string | ITSKeys[], extra?: Parameters<F>[2], result?: T[]): T | T[]
{
	paths = p(paths);
	return r0(fn, target, paths, extra, result);
}

export function r0<T, F extends typeof _get | typeof _set | typeof _has | typeof _unset>(fn: F, target: unknown | unknown[], paths: ITSKeys[], extra?: Parameters<F>[2], result?: T[]): T | T[]
{
	let symIndex = paths.indexOf(SymStar);
	if (symIndex < 0)
	{
		// @ts-ignore
		let value = fn(target, paths, extra);

		if (typeof result != 'undefined')
		{
			result.push(value)
		}

		return value
	}

	result = result || [];

	if (symIndex === 0)
	{
		let keys = ObjectKeysExtra(target as any, {
			//nonEnumerable: true,
			symbol: true,
		});

		paths.shift();

		for (let k of keys)
		{
			r0(fn, target, [k, ...paths], extra, result)
		}

		return result
	}
	else
	{
		let p1 = paths.slice(0, symIndex);
		let o = _get(target as object, p1 as any);

		let p2 = paths.slice(symIndex);

		return r0(fn, o, p2, extra, result)
	}
}

export function ObjectKeysExtra(obj: object, options: {
	/**
	 * include non-enumerable keys
	 */
	nonEnumerable?: boolean;
	/**
	 * include symbol
	 */
	symbol?: boolean,
} = {})
{
	let keys: ITSKeys[] = options.nonEnumerable ?
		Object.getOwnPropertyNames(obj)
		: Object.keys(obj)
	;

	if (options.symbol)
	{
		keys.push(...Object.getOwnPropertySymbols(obj))
	}

	return keys
}

/**
 * handle input to paths
 *
 * @param {string | ITSKeys[]} paths
 * @returns {ITSKeys[]}
 */
export function p(paths: IPathsInput): ITSKeys[]
{
	return p1(p0(paths));
}

export function p0(paths: IPathsInput): ITSKeys[]
{
	if (Array.isArray(paths)) return paths.slice();

	if (typeof paths === 'symbol') return [paths];

	return splitSpecific(paths);
}

export function p1(paths: ITSKeys[]): ITSKeys[]
{
	return paths
		.map(v => {
			if (v === '*')
			{
				return SymStar;
			}
			else if (v === '\\*')
			{
				v = '*';
			}

			return v
		})
		;
}

/**
 * check all value is true
 *
 * @param {boolean | boolean[]} result
 * @returns {boolean}
 */
export function b(result: boolean | boolean[]): boolean
{
	return Array.isArray(result)
		? result.every(boolean => !!boolean)
		: result
}

export function b_some(result: boolean | boolean[]): boolean
{
	return Array.isArray(result)
		? result.some(boolean => !!boolean)
		: result
}
