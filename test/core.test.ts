/**
 * Created by User on 2020/1/12.
 */

import _get, { Options } from 'get-value';
import _set from 'set-value';
import _has from 'has-value';
import _unset from "../lib/core/unset";
import { p, b } from '../lib/util';

let testData = JSON.parse(JSON.stringify(require('./deep.json'))) as typeof import('./deep.json');

// @ts-ignore
describe(`check core function support input array paths`, () =>
{
	it(`get`, function ()
	{

		let actual = _get(testData, p('a.b.c.arr.0') as any);
		let expected = {
			d: {
				e: { arr: [{ f: true }, { f: true }] },
			},
			x: true,
		};

		expect(actual).toStrictEqual(expected);
		expect(actual).toMatchSnapshot();
	});

	it(`set`, function ()
	{

		let expected = 999;

		// @ts-ignore
		_set(testData, p('a.b.c.arr.0'), expected)

		let actual = _get(testData, p('a.b.c.arr.0') as any);

		expect(actual).toStrictEqual(expected);
		expect(actual).toMatchSnapshot();
	});

	it(`has`, function ()
	{
		// @ts-ignore
		expect(_has(testData, p('a.b.c.arr.0'))).toBeTruthy();
		// @ts-ignore
		expect(_has(testData, p('a.b.c.arr.99'))).toBeFalsy();

	});

	it(`unset`, function ()
	{
		let paths = p('a.b.c.arr.2');

		expect(_has(testData, paths as any)).toBeTruthy();

		expect(_unset(testData, paths as any)).toBeTruthy();

		expect(_has(testData, paths as any)).toBeFalsy();

	});

})

// @ts-ignore
describe(`check core function support escape path`, () =>
{

	it(`get`, function ()
	{

		let actual = _get(testData, 'a.b\\.c.arr.0');
		let expected = {
			d: {
				e: { arr: [{ f: true }, { f: true }] },
			},
			y: true,
		};

		expect(actual).toStrictEqual(expected);
		expect(actual).toMatchSnapshot();
	});

	it(`set`, function ()
	{
		let paths = 'a.b\\.c.arr.0';

		let expected = 999;

		// @ts-ignore
		_set(testData, paths, expected)

		let actual = _get(testData, paths);

		expect(actual).toStrictEqual(expected);
		expect(actual).toMatchSnapshot();
	});

	it(`has`, function ()
	{
		// @ts-ignore
		expect(_has(testData, 'a.b\\.c.arr.0')).toBeTruthy();
		// @ts-ignore
		expect(_has(testData, 'a.b\\.c.arr.99')).toBeFalsy();

	});

	it(`unset`, function ()
	{
		let paths = 'a.b\\.c.arr.2';

		//console.dir(p(paths))

		expect(_has(testData, paths as any)).toBeTruthy();

		expect(_get(testData, paths as any)).toStrictEqual({
				d: {
					e: { arr: [{ f: false }, { f: false }] },
				},
				y: true,
			},
		);

		expect(_unset(testData, paths as any)).toBeTruthy();

		expect(_has(testData, paths as any)).toBeFalsy();

	});

})

