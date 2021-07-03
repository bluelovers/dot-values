// @ts-nocheck

import set from '../lib/set';
import split from 'split-string';

describe('set-value', () =>
{
	describe.skip('unsafe properties', () =>
	{
		it('should not allow setting constructor', () =>
		{
			expect(() => set({}, 'a.constructor.b', 'c')).toThrow();
			expect(() => set({}, 'a.constructor', 'c')).toThrow();
			expect(() => set({}, 'constructor', 'c')).toThrow();
		});

		it('should not allow setting prototype', () =>
		{
			expect(() => set({}, 'a.prototype.b', 'c')).toThrow();
			expect(() => set({}, 'a.prototype', 'c')).toThrow();
			expect(() => set({}, 'prototype', 'c')).toThrow();
		});

		it('should not allow setting __proto__', () =>
		{
			expect(() => set({}, 'a.__proto__.b', 'c')).toThrow();
			expect(() => set({}, 'a.__proto__', 'c')).toThrow();
			expect(() => set({}, '__proto__', 'c')).toThrow();
		});
	});

	describe('set', () =>
	{
		it('should return non-objects', () =>
		{
			const str = set('foo', 'a.b', 'c');
			expect(str).toEqual('foo');
			const _null = set(null, 'a.b', 'c');
			expect(_null).toEqual(null);
		});

		it('should set when key is a symbol', () =>
		{
			const key = Symbol('foo');
			const obj = {};
			set(obj, key, 'bar');
			expect(obj[key]).toEqual('bar');
		});

		it('should set on the root of the object', () =>
		{
			const o = {};
			set(o, 'foo', 'bar');
			expect(o.foo).toEqual('bar');
		});

		it('should set the specified property.', () =>
		{
			expect(set({ a: 'aaa', b: 'b' }, 'a', 'bbb')).toEqual({ a: 'bbb', b: 'b' });
		});

		it('should set a nested property', () =>
		{
			const o = {};
			set(o, 'a.b', 'c');
			expect(o.a.b).toEqual('c');
		});

		it('should set a nested property where the last key is a symbol', () =>
		{
			const o = {};
			set(o, 'a.b', 'c');
			expect(o.a.b).toEqual('c');
		});

		it('should support passing an array as the key', () =>
		{
			const actual = set({ a: 'a', b: { c: 'd' } }, ['b', 'c', 'd'], 'eee');
			expect(actual).toEqual({ a: 'a', b: { c: { d: 'eee' } } });
		});

		it('should set a deeply nested value.', () =>
		{
			const actual = set({ a: 'a', b: { c: 'd' } }, 'b.c.d', 'eee');
			expect(actual).toEqual({ a: 'a', b: { c: { d: 'eee' } } });
		});

		it('should allow keys to be whitespace', () =>
		{
			const o = {};
			set(o, 'a. .a', { y: 'z' });
			expect(o.a[' '].a).toEqual({ y: 'z' });
		});

		it('should extend an array', () =>
		{
			const o = { a: [] };
			set(o, 'a.0', { y: 'z' });
			expect(Array.isArray(o.a)).toBeTruthy();
			expect(o.a[0]).toEqual({ y: 'z' });
		});

		it.skip('should create an array if it does not already exist', () =>
		{
			const o = {};
			set(o, 'a.0.a', { y: 'z' });
			set(o, 'a.1.b', { y: 'z' });
			set(o, 'a.2.c', { y: 'z' });
			set(o, 'b.0', { y: 'z' });
			set(o, '0', { y: 'z' });
			expect(Array.isArray(o.a)).toBeTruthy();
			expect(o.a[0].a).toEqual({ y: 'z' });
			expect(o.a[1].b).toEqual({ y: 'z' });
			expect(o.a[2].c).toEqual({ y: 'z' });
			expect(o.b).toEqual([{ y: 'z' }]);
			expect(o['0']).toEqual({ y: 'z' });
		});

		it('should extend a function', () =>
		{
			const log = () => {};
			const warning = () => {};
			const o = {};

			set(o, 'helpers.foo', log);
			set(o, 'helpers.foo.warning', warning);
			expect(typeof o.helpers.foo).toEqual('function');
			expect(typeof o.helpers.foo.warning).toEqual('function');
		});

		it('should extend an object in an array', () =>
		{
			const o = { a: [{}, {}, {}] };
			set(o, 'a.0.a', { y: 'z' });
			set(o, 'a.1.b', { y: 'z' });
			set(o, 'a.2.c', { y: 'z' });
			expect(Array.isArray(o.a)).toBeTruthy();
			expect(o.a[0].a).toEqual({ y: 'z' });
			expect(o.a[1].b).toEqual({ y: 'z' });
			expect(o.a[2].c).toEqual({ y: 'z' });
		});

		it('should create a deeply nested property if it does not already exist', () =>
		{
			const o = {};
			set(o, 'a.b.c.d.e', 'c');
			expect(o.a.b.c.d.e).toEqual('c');
		});

		it('should not create a nested property if it does already exist', () =>
		{
			const first = { name: 'Halle' };
			const o = { a: first };
			set(o, 'a.b', 'c');
			expect(o.a.b).toEqual('c');
			expect(o.a).toEqual(first);
			expect(o.a.name).toEqual('Halle');
		});

		it('should support immediate properties', () =>
		{
			const o = {};
			set(o, 'a', 'b');
			expect(o.a).toEqual('b');
		});

		it('should use property paths to set nested values from the source object.', () =>
		{
			const o = {};
			set(o, 'a.locals.name', { first: 'Brian' });
			set(o, 'b.locals.name', { last: 'Woodward' });
			set(o, 'b.locals.name.last', 'Woodward');
			expect(o).toEqual(
				{ a: { locals: { name: { first: 'Brian' } } }, b: { locals: { name: { last: 'Woodward' } } } },
			);
		});

		it('should delete the property when value is undefined', () =>
		{
			const fixture = {};
			expect(set(fixture, 'a.locals.name')).toEqual({ a: { locals: {} } });
			expect(set(fixture, 'b.locals.name')).toEqual({ b: { locals: {} }, a: { locals: {} } });
			expect(set({ a: 'a', b: { c: 'd' } }, 'b.c')).toEqual({ a: 'a', b: {} });
		});

		it.skip('should return the entire object if no property is passed.', () =>
		{
			expect(set({ a: 'a', b: { c: 'd' } })).toEqual({ a: 'a', b: { c: 'd' } });
		});

		it('should set non-plain objects', done =>
		{
			const o = {};

			set(o, 'a.b', new Date());
			const firstDate = o.a.b.getTime();

			setTimeout(function ()
			{
				set(o, 'a.b', new Date());
				const secondDate = o.a.b.getTime();

				expect(firstDate).not.toEqual(secondDate);
				done();
			}, 10);
		});
	});

	describe('escaping', () =>
	{
		it('should not split escaped dots', () =>
		{
			const o = {};
			set(o, 'a\\.b.c.d.e', 'c');
			expect(o['a.b'].c.d.e).toEqual('c');
		});

		it('should work with multiple escaped dots', () =>
		{
			const obj1 = {};
			set(obj1, 'e\\.f\\.g', 1);
			expect(obj1['e.f.g']).toEqual(1);

			const obj2 = {};
			set(obj2, 'e\\.f.g\\.h\\.i.j', 1);
			expect(obj2).toEqual({ 'e.f': { 'g.h.i': { j: 1 } } });
		});

		it('should work with multiple escaped dots', () =>
		{
			const obj1 = {};
			const key = Symbol('key');
			set(obj1, [key, 'e.f', 'g'], 1);
			expect(obj1[key]['e.f'].g).toEqual(1);

			const obj2 = {};
			set(obj2, 'e\\.f.g\\.h\\.i.j', 1);
			expect(obj2).toEqual({ 'e.f': { 'g.h.i': { j: 1 } } });
		});
	});

	describe.skip('options.merge', () =>
	{
		it('should merge an existing value with the given value', () =>
		{
			const o = { a: { b: { c: 'd' } } };
			set(o, 'a.b', { y: 'z' }, { merge: true });
			expect(o.a.b).toEqual({ c: 'd', y: 'z' });

			const obj = { foo: { bar: { baz: 'qux' } } };
			set(obj, 'foo.bar.fez', 'zzz', { merge: true });
			expect(obj).toEqual({ foo: { bar: { baz: 'qux', fez: 'zzz' } } });
		});

		it('should update an object by merging values', () =>
		{
			const o = {};
			set(o, 'a', { b: 'c' });
			set(o, 'a', { c: 'd' }, { merge: true });
			expect(o).toEqual({ a: { b: 'c', c: 'd' } });
			set(o, 'a', 'b');
			expect(o.a).toEqual('b');
		});
	});

	describe('options.preservePaths', () =>
	{
		it('should split properties with a forward slash when preservePaths is false', () =>
		{
			const obj = {};
			set(obj, 'https://github.com', true, { preservePaths: false });

			expect(obj).toEqual({ 'https://github': { com: true } });
		});

		it.skip('should not split properties with a forward slash', () =>
		{
			const obj = {};
			set(obj, 'foo/bar/baz.md', 'c');
			expect(obj['foo/bar/baz.md']).toEqual('c');
		});
	});

	describe.skip('options.split', () =>
	{
		const keep = (value, state) =>
		{
			return value !== '"' && value !== '\'';
		};

		const options = {
			split(prop)
			{
				return split(prop, { separator: '.', brackets: true, quotes: true, keep });
			},
		};

		it('should use simple String.split() when options.split is not defined', () =>
		{
			const o = {};
			set(o, 'a."b.c.d".e', 'c');
			expect(o.a['"b'].c['d"'].e).toEqual('c');
		});

		it('should take a custom separator', () =>
		{
			const o = {};
			set(o, 'a/b/c/d/e', 'c', { separator: '/' });
			expect(o.a.b.c.d.e).toEqual('c');
		});

		it('should use a custom function to not split inside double quotes', () =>
		{
			const o = {};
			set(o, 'a."b.c.d".e', 'c', options);
			expect(o.a['b.c.d'].e).toEqual('c');
		});

		it('should use a custom function to not split inside single quotes', () =>
		{
			const o = {};
			set(o, "a.'b.c.d'.e", 'c', options);
			expect(o.a['b.c.d'].e).toEqual('c');
		});

		it('should use a custom function to not split inside square brackets', () =>
		{
			const o = {};
			set(o, 'a.[b.c.d].e', 'c', options);
			expect(o.a['[b.c.d]'].e).toEqual('c');
		});

		it('should use a custom function to not split inside parens', () =>
		{
			const o = {};
			set(o, 'a.(b.c.d).e', 'c', options);
			expect(o.a['(b.c.d)'].e).toEqual('c');
		});

		it('should use a custom function to not split inside angle brackets', () =>
		{
			const o = {};
			set(o, 'a.<b.c.d>.e', 'c', options);
			expect(o.a['<b.c.d>'].e).toEqual('c');
		});

		it('should use a custom function to not split inside curly braces', () =>
		{
			const o = {};
			set(o, 'a.{b.c.d }.e', 'c', options);
			expect(o.a['{b.c.d }'].e).toEqual('c');
		});
	});
});
