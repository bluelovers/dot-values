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

// @ts-ignore
import { chai, relative, expect, path, assert, util, mochaAsync, SymbolLogOutput } from './_local-dev';
import deep from './deep.json';
import { get } from '..';

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

		testData = await import('./deep.json');

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
	describe(`get a.b.c.arr.*.d`, () =>
	{
		// @ts-ignore
		it(`label`, function (done)
		{
			//console.log('it:inner', currentTest.title);
			//console.log('it:inner', currentTest.fullTitle());

			let actual = get(deep, 'a.b.c.arr.*.d');
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

			done();
		});

		// @ts-ignore
		it(`get a.b.c.arr.0.d`, async function (done)
		{
			//console.log('it:inner', currentTest.title);
			//console.log('it:inner', currentTest.fullTitle());

			let actual = get(deep, 'a.b.c.arr.0.d');
			let expected = {
				e: { arr: [{ f: true }, { f: true }] },
			};

			// @ts-ignore
			currentTest[SymbolLogOutput] = actual;

			//expect(actual).to.be.ok;
			//expect(actual).to.be.deep.equal(expected);
			//assert.isOk(actual.value, util.inspect(actual));

			done();
		});
	});
});
