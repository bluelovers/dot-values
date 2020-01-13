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
	describe(`util`, () =>
	{
		// @ts-ignore
		it(`b:boolean`, function ()
		{
			//console.log('it:inner', currentTest.title);
			//console.log('it:inner', currentTest.fullTitle());

			expect(b([
				true,
				false,
			])).to.be.not.ok;

			expect(b([
				true,
				true,
			])).to.be.ok;

			expect(b([
				false,
				false,
			])).to.be.not.ok;

		});
	});

});
