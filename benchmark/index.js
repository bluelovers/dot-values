const
	Benchmark = require('benchmark'),
	microtime = require('microtime'),
	jp = require('jsonpath'),
	dv = require('..')

const deep = require('../deep.json')

let suite = new Benchmark.Suite()

suite.add('dot-values', function() {
	dv.get(deep, 'a.b.c.arr.*.d.e.arr.*.c')
})
.add('jsonpath', function() {
	jp.query(deep, 'a.b.c.arr[*].d.e.arr[*].c')
})
.on('complete', function() {
	let fastest = this.filter('fastest'),
		slowest = this.filter('slowest'),
		name = fastest.map('name'),
		seconds = slowest.map('times')[0].elapsed
			- fastest.map('times')[0].elapsed

	console.log(`${name} is faster by ${seconds} seconds`)
})
.run({ async: true })