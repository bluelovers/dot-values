import { p } from '../lib/util';

describe(`check supported path`, () =>
{

	test(`symbol`, () =>
	{
		const key = Symbol('foo');

		let actual = p(key);
		let expected = [key];

		expect(actual).toStrictEqual(expected);
		//expect(actual).toBeInstanceOf(Date);
		expect(actual).toMatchSnapshot();

	});

	test(`array`, () =>
	{
		const key = ['b', 'c', 'd'];

		let actual = p(key);
		let expected = ['b', 'c', 'd'];

		expect(actual).toStrictEqual(expected);
		//expect(actual).toBeInstanceOf(Date);
		expect(actual).toMatchSnapshot();

	});

	test(`b.c.d`, () =>
	{
		const key = 'b.c.d';

		let actual = p(key);
		let expected = ['b', 'c', 'd'];

		expect(actual).toStrictEqual(expected);
		//expect(actual).toBeInstanceOf(Date);
		expect(actual).toMatchSnapshot();

	});

	test(`allow keys to be whitespace`, () =>
	{
		const key = 'a. .a';

		let actual = p(key);
		let expected = ['a', ' ', 'a'];

		expect(actual).toStrictEqual(expected);
		//expect(actual).toBeInstanceOf(Date);
		expect(actual).toMatchSnapshot();

	});

	test(`a\\.b.c.d.e`, () =>
	{
		const key = 'a\\.b.c.d.e';

		let actual = p(key);
		let expected = [
			"a.b",
			"c",
			"d",
			"e"
		];

		expect(actual).toStrictEqual(expected);
		//expect(actual).toBeInstanceOf(Date);
		expect(actual).toMatchSnapshot();

	});

	test(`e\\.f\\.g`, () =>
	{
		const key = 'e\\.f\\.g';

		let actual = p(key);
		let expected = [
			"e.f.g"
		];

		expect(actual).toStrictEqual(expected);
		//expect(actual).toBeInstanceOf(Date);
		expect(actual).toMatchSnapshot();

	});

	test(`a.{b.c}.{d.e}`, () =>
	{
		const key = 'a.{b.c}.{d.e}';

		let actual = p(key);
		let expected = [ 'a', '{b', 'c}', '{d', 'e}' ];

		expect(actual).toStrictEqual(expected);
		//expect(actual).toBeInstanceOf(Date);
		expect(actual).toMatchSnapshot();

	});

})
