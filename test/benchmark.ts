/**
 * Created by user on 2020/1/14.
 */

import benchmark from 'benny'
import deep from './deep.json'
import dotValues2 from '..'
import { name, version } from '../package.json'
import { join } from 'path'
import { getProperty as dotPropGetProperty } from 'dot-prop';
import * as dotWild from 'dot-wild';
// @ts-ignore
import dotProp2 from 'dotprop';

export default (async () =>
{

	const folder = join(__dirname, 'benchmark', 'results');

	let title = 'star';
	let paths = 'a.b.c.arr.*.d.e.arr.*.f';

	await benchmark.suite(
		title,

		benchmark.add(name, () =>
		{
			dotValues2.get(deep, paths)
		}),

		benchmark.add(`dot-wild`, () =>
		{
			dotWild.get(deep, paths)
		}),

		benchmark.cycle(),
		benchmark.complete(),
		benchmark.save({ file: title, folder, version, details: true }),
		benchmark.save({ file: title, folder, version, details: true, format: 'chart.html' }),
	);


	paths = `a.b.c.arr.0.d.e.arr.0.f`;
	title = `get_${paths.split('.').join('_')}`;

	await benchmark.suite(
		title,

		benchmark.add(name, () =>
		{
			dotValues2.get(deep, paths)
		}),

		benchmark.add('dot-prop', () =>
		{
			dotPropGetProperty(deep, paths)
		}),

		benchmark.add('dotprop', () =>
		{
			dotProp2(deep, paths)
		}),

		benchmark.add(`dot-wild`, () =>
		{
			dotWild.get(deep, paths)
		}),

		benchmark.cycle(),
		benchmark.complete(),
		benchmark.save({ file: title, folder, version, details: true }),
		benchmark.save({ file: title, folder, version, details: true, format: 'chart.html' }),
	);

})();


