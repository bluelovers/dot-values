/**
 * Created by User on 2020/1/12.
 */

// @ts-ignore
/// <reference types="mocha" />
// @ts-ignore
/// <reference types="benchmark" />
// @ts-ignore
/// <reference types="chai" />
// @ts-ignore
/// <reference types="node" />
/// <reference path="../module.d.ts" />

// @ts-ignore
import { chai, relative, expect, path, assert, util, mochaAsync, SymbolLogOutput } from './_local-dev';
import { get } from '..';
import _get, { Options } from 'get-value';
import _set from 'set-value';
import _has from 'has-value';
//import _unset from 'unset-value';
import _unset from "../lib/core/unset";
import { p, b } from '../lib/util';

// @ts-ignore
describe(relative(__filename), () =>
{
	// @ts-ignore
	let currentTest: Mocha.Test;
	let testData: typeof import('./deep.json');

	// @ts-ignore
	beforeEach(async function ()
	{
		// @ts-ignore
		currentTest = this.currentTest;

		// @ts-ignore
		delete currentTest[SymbolLogOutput];

		testData = await import('./deep.json')
			.then(v => JSON.parse(JSON.stringify(v)))
		;

		//console.log('it:before', currentTest.title);
		//console.log('it:before', currentTest.fullTitle());
	});

	// @ts-ignore
	afterEach(function ()
	{
		// @ts-ignore
		let out = currentTest[SymbolLogOutput];
		let t = typeof out;

		if (t === 'string')
		{
			console.log(`----------`);
			console.log(out);
			console.log(`----------`);
		}
		else if (t === 'function')
		{
			out(currentTest)
		}
		else if (out != null)
		{
			console.dir(out);
		}

	});

	// @ts-ignore
	describe(`check core function support input array paths`, () =>
	{
		it(`get`, function ()
		{

			let actual = _get(testData, p('a.b.c.arr.0') as any);
			let expected = {
				d: {
					e: { arr: [ { f: true }, { f: true } ] }
				},
				x: true
			};

			// @ts-ignore
			currentTest[SymbolLogOutput] = actual;

			expect(actual).to.be.deep.equal(expected);
		});

		it(`set`, function ()
		{

			let expected = 999;

			// @ts-ignore
			_set(testData, p('a.b.c.arr.0'), expected)

			let actual = _get(testData, p('a.b.c.arr.0') as any);

			// @ts-ignore
			currentTest[SymbolLogOutput] = actual;

			expect(actual).to.be.deep.equal(expected);
		});

		it(`has`, function ()
		{
			// @ts-ignore
			expect(_has(testData, p('a.b.c.arr.0'))).to.be.ok;
			// @ts-ignore
			expect(_has(testData, p('a.b.c.arr.99'))).to.be.not.ok;

		});

		it(`unset`, function ()
		{
			let paths = p('a.b.c.arr.2');

			expect(_has(testData, paths as any)).to.be.ok;

			expect(_unset(testData, paths as any)).to.be.ok;

			expect(_has(testData, paths as any)).to.be.not.ok;

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
					e: { arr: [ { f: true }, { f: true } ] }
				},
				y: true
			};

			// @ts-ignore
			currentTest[SymbolLogOutput] = actual;

			expect(actual).to.be.deep.equal(expected);
		});

		it(`set`, function ()
		{
			let paths = 'a.b\\.c.arr.0';

			let expected = 999;

			// @ts-ignore
			_set(testData, paths, expected)

			let actual = _get(testData, paths);

			// @ts-ignore
			currentTest[SymbolLogOutput] = actual;

			expect(actual).to.be.deep.equal(expected);
		});

		it(`has`, function ()
		{
			// @ts-ignore
			expect(_has(testData, 'a.b\\.c.arr.0')).to.be.ok;
			// @ts-ignore
			expect(_has(testData, 'a.b\\.c.arr.99')).to.be.not.ok;

		});

		it(`unset`, function ()
		{
			let paths = 'a.b\\.c.arr.2';

			//console.dir(p(paths))

			expect(_has(testData, paths as any)).to.be.ok;

			expect(_get(testData, paths as any)).to.be.deep.equal({
					d: {
						e: { arr: [ { f: false }, { f: false } ] }
					},
					y: true
				}
			);

			expect(_unset(testData, paths as any)).to.be.ok;

			expect(_has(testData, paths as any)).to.be.not.ok;

		});

	})

});
