/**
 * Created by User on 2020/1/12.
 */

import { b } from '../lib/util';

let testData = JSON.parse(JSON.stringify(require('./deep.json'))) as typeof import('./deep.json');

describe(`util`, () =>
{
	// @ts-ignore
	it(`b:boolean`, function ()
	{

		expect(b([
			true,
			false,
		])).toBeFalsy();

		expect(b([
			true,
			true,
		])).toBeTruthy();

		expect(b([
			false,
			false,
		])).toBeFalsy();

	});
});
