/**
 * Created by User on 2020/1/12.
 */

import { get } from '..';

let testData = JSON.parse(JSON.stringify(require('./deep.json'))) as typeof import('./deep.json');

describe(`test deep.json`, () =>
{
	// @ts-ignore
	it(`get a.b.c.arr.*.d`, function ()
	{

		let actual = get(testData, 'a.b.c.arr.*.d');
		let expected = [
			{
				e: { arr: [{ f: true }, { f: true }] },
			},
			{
				e: { arr: [{ f: false }, { f: false }] },
			},
			{
				e: { arr: [{ f: false }, { f: false }] },
			},
		];

		expect(actual).toStrictEqual(expected);
		expect(actual).toMatchSnapshot();

	});

	// @ts-ignore
	it(`get a.b.c.arr.0.d`, async function ()
	{

		let actual = get(testData, 'a.b.c.arr.0.d');
		let expected = {
			e: { arr: [{ f: true }, { f: true }] },
		};

		expect(actual).toStrictEqual(expected);
		expect(actual).toMatchSnapshot();

	});

	// @ts-ignore
	it(`get a.b\\.c.arr.2`, async function ()
	{

		let actual = get(testData, 'a.b\\.c.arr.2');
		let expected = {
			d: {
				e: { arr: [{ f: false }, { f: false }] },
			},
			y: true,
		};

		expect(actual).toStrictEqual(expected);
		expect(actual).toMatchSnapshot();

	});

	// @ts-ignore
	it(`get a.b\\\.c.arr.2`, async function ()
	{

		let actual = get(testData, 'a.b\\\.c.arr.2');
		let expected = {
			d: {
				e: { arr: [{ f: false }, { f: false }] },
			},
			y: true,
		};

		expect(actual).toStrictEqual(expected);
		expect(actual).toMatchSnapshot();

	});

	// @ts-ignore
	it(`get a.b\\\\.c.arr.2`, async function ()
	{

		let actual = get(testData, 'a.b\\\\.c.arr.2');
		let expected = {
			d: {
				e: { arr: [{ f: false }, { f: false }] },
			},
			z: true,
		};

		expect(actual).toStrictEqual(expected);
		expect(actual).toMatchSnapshot();

	});

	// @ts-ignore
	it(`get a.b\\\\\\.c.arr.2`, async function ()
	{

		let actual = get(testData, 'a.b\\\\\\.c.arr.2');
		let expected = {
			d: {
				e: { arr: [{ f: false }, { f: false }] },
			},
			w: true,
		};

		expect(actual).toStrictEqual(expected);
		expect(actual).toMatchSnapshot();

	});

});
