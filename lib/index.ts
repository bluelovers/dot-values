const $ = {
		get: require('get-value'),
		set: require('set-value'),
		has: require('has-value'),
		unset: require('unset-value')
	},

	_ = {
		/**
		 * @param  {Object} target
		 * @param  {String} path
		 * @param  {*}      value
		 * @return {*}
		 */
		get: function get(target, path, value) {
			return r('get', target, p(path), { default: value })
		},

		/**
		 * @param {Object} target
		 * @param {String} path
		 * @param {*}      value
		 * @return {Object}
		 */
		set: function set(target, path, value) {
			r('set', target, p(path), value)
			return target
		},

		/**
		 * @param  {Object}  target
		 * @param  {String}  path
		 * @return {Boolean}
		 */
		has: function has(target, path) {
			return b(
				r('has', target, p(path))
			)
		},

		/**
		 * @param {Object} target
		 * @param {String} path
		 * @return {Boolean}
		 */
		unset: function unset(target, path) {
			return b(
				r('unset', target, p(path))
			)
		}
	},

	/**
	 * @param  {String} fn
	 * @param  {Object} target
	 * @param  {Array.<String>} path
	 * @param  {*} extra
	 * @param  {Array} result (optional)
	 * @return {*}
	 */
	r = (fn, target, path, extra, result) => {
		let symIndex = path.indexOf('*'),
			hasResult = Array.isArray(result),
			isArray = symIndex === 0 && Array.isArray(target),
			isLast = ! path.length

		if (symIndex < 0 || isLast) {
			let value = isLast
				? target
				: $[fn](target, path.join('.'), extra)

			if (hasResult) {
				result.push(value)
			}

			return value
		}

		result = hasResult ? result : []

		if ( ! isArray) {
			return r(fn, $.get(target, path.shift()), path, extra, result)
		}

		path.shift()
		target.forEach((target) => {
			r(fn, target, Array.from(path), extra, result)
		})

		return result
	},

	/**
	 * @param {String|Array} path
	 * @return {Array.<String>}
	 */
	p = (path) => {
		if (Array.isArray(path)) return path

		return path.split(/\.*(\*)\.*/)
			.filter(segment => segment !== '')
	},

	/**
	 * @param {Array|Boolean} result
	 * @return {Boolean}
	 */
	b = (result) => {
		return Array.isArray(result)
			? ! result.filter(boolean => ! boolean).length
			: result
	}

module.exports = _