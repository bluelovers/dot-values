/**
 * Created by User on 2020/1/12.
 */

import { get } from '..';

let testData = JSON.parse(JSON.stringify(require('./deep.json'))) as typeof import('./deep.json');

describe(`test * in object`, () =>
{
	it(`get a.*.c`, function ()
	{
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
										"f": true,
									},
									{
										"f": true,
									},
								],
							},
						},
						"x": true,
					},
					{
						"d": {
							"e": {
								"arr": [
									{
										"f": false,
									},
									{
										"f": false,
									},
								],
							},
						},
					},
					{
						"d": {
							"e": {
								"arr": [
									{
										"f": false,
									},
									{
										"f": false,
									},
								],
							},
						},
					},
				],
			},
		];

		expect(actual).toStrictEqual(expected);
		expect(actual).toMatchSnapshot();
	});

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
							e: { arr: [{ f: true }, { f: true }] },
						},
						y: true,
					},
					{
						d: {
							e: { arr: [{ f: false }, { f: false }] },
						},
						y: true,
					},
					{
						d: {
							e: { arr: [{ f: false }, { f: false }] },
						},
						y: true,
					},
				],
			},
			{
				arr: [
					{
						d: {
							e: { arr: [{ f: true }, { f: true }] },
						},
						z: true,
					},
					{
						d: {
							e: { arr: [{ f: false }, { f: false }] },
						},
						z: true,
					},
					{
						d: {
							e: { arr: [{ f: false }, { f: false }] },
						},
						z: true,
					},
				],
			},
			{
				arr: [
					{
						d: {
							e: { arr: [{ f: true }, { f: true }] },
						},
						w: true,
					},
					{
						d: {
							e: { arr: [{ f: false }, { f: false }] },
						},
						w: true,
					},
					{
						d: {
							e: { arr: [{ f: false }, { f: false }] },
						},
						w: true,
					},
				],
			},
			{
				c: {
					arr: [
						{
							d: {
								e: { arr: [{ f: true }, { f: true }] },
							},
							x: true,
						},
						{
							d: {
								e: { arr: [{ f: false }, { f: false }] },
							},
						},
						{
							d: {
								e: { arr: [{ f: false }, { f: false }] },
							},
						},
					],
				},
			},
		];

		expect(actual).toStrictEqual(expected);
		expect(actual).toMatchSnapshot();
	});
});
