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
import { p } from '../lib/util';

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
	describe(`test deep.json`, () =>
	{
		// @ts-ignore
		it(`get a.b.c.arr.*.d`, function ()
		{
			//console.log('it:inner', currentTest.title);
			//console.log('it:inner', currentTest.fullTitle());

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

			// @ts-ignore
			currentTest[SymbolLogOutput] = actual;

			//expect(actual).to.be.ok;
			expect(actual).to.be.deep.equal(expected);
			//assert.isOk(actual.value, util.inspect(actual));
		});

		// @ts-ignore
		it(`get a.b.c.arr.0.d`, async function ()
		{
			//console.log('it:inner', currentTest.title);
			//console.log('it:inner', currentTest.fullTitle());

			let actual = get(testData, 'a.b.c.arr.0.d');
			let expected = {
				e: { arr: [{ f: true }, { f: true }] },
			};

			// @ts-ignore
			currentTest[SymbolLogOutput] = actual;

			//expect(actual).to.be.ok;
			expect(actual).to.be.deep.equal(expected);
			//assert.isOk(actual.value, util.inspect(actual));
		});
	});

	// @ts-ignore
	describe(`test * in object`, () =>
	{
		// @ts-ignore
		it(`get a.*.c`, function ()
		{
			//console.log('it:inner', currentTest.title);
			//console.log('it:inner', currentTest.fullTitle());

			let actual = get(testData, 'a.*.c');
			let expected = [
				undefined,
				undefined,
				undefined,
				{
					"arr": [
						{
							"d": {
								"e": {
									"arr": [
										{
											"f": true
										},
										{
											"f": true
										}
									]
								}
							},
							"x": true
						},
						{
							"d": {
								"e": {
									"arr": [
										{
											"f": false
										},
										{
											"f": false
										}
									]
								}
							}
						},
						{
							"d": {
								"e": {
									"arr": [
										{
											"f": false
										},
										{
											"f": false
										}
									]
								}
							}
						}
					]
				}
			];

			// @ts-ignore
			currentTest[SymbolLogOutput] = actual;

			//expect(actual).to.be.ok;
			expect(actual).to.be.deep.equal(expected);
			//assert.isOk(actual.value, util.inspect(actual));
		});

		// @ts-ignore
		it(`get a.*`, function ()
		{
			//console.log('it:inner', currentTest.title);
			//console.log('it:inner', currentTest.fullTitle());

			let actual = get(testData, 'a.*');
			let expected = [
				{
					arr: [
						{
							d: {
								e: { arr: [ { f: true }, { f: true } ] }
							},
							y: true
						},
						{
							d: {
								e: { arr: [ { f: false }, { f: false } ] }
							},
							y: true
						},
						{
							d: {
								e: { arr: [ { f: false }, { f: false } ] }
							},
							y: true
						}
					]
				},
				{
					arr: [
						{
							d: {
								e: { arr: [ { f: true }, { f: true } ] }
							},
							z: true
						},
						{
							d: {
								e: { arr: [ { f: false }, { f: false } ] }
							},
							z: true
						},
						{
							d: {
								e: { arr: [ { f: false }, { f: false } ] }
							},
							z: true
						}
					]
				},
				{
					arr: [
						{
							d: {
								e: { arr: [ { f: true }, { f: true } ] }
							},
							w: true
						},
						{
							d: {
								e: { arr: [ { f: false }, { f: false } ] }
							},
							w: true
						},
						{
							d: {
								e: { arr: [ { f: false }, { f: false } ] }
							},
							w: true
						}
					]
				},
				{
					c: {
						arr: [
							{
								d: {
									e: { arr: [ { f: true }, { f: true } ] }
								},
								x: true
							},
							{
								d: {
									e: { arr: [ { f: false }, { f: false } ] }
								}
							},
							{
								d: {
									e: { arr: [ { f: false }, { f: false } ] }
								}
							}
						]
					}
				}
			];

			// @ts-ignore
			currentTest[SymbolLogOutput] = actual;

			//expect(actual).to.be.ok;
			expect(actual).to.be.deep.equal(expected);
			//assert.isOk(actual.value, util.inspect(actual));
		});
	});

});
