const
	Benchmark = require('benchmark'),
	microtime = require('microtime'),
	jp = require('jsonpath'),
	_ = require('..')

const deep = require('../deep.json')

let suite = new Benchmark.Suite()

suite.add('dot-values', function() {
	_.get(deep, 'a.b.c.arr.*.d.e.arr.*.f')
})
.add('jsonpath', function() {
	jp.query(deep, 'a.b.c.arr[*].d.e.arr[*].f')
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