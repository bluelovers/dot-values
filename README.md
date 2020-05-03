dot-values2
===========
`dot-values` is a collection of dot path object mutators ([get-value](https://www.npmjs.com/package/get-value), [has-value](https://www.npmjs.com/package/has-value), [set-value](https://www.npmjs.com/package/set-value), [unset-value](https://www.npmjs.com/package/unset-value)) with one neat addition...

#### You can query arrays of objects

```js
const _ = require('dot-values2')

let request = {
	header: {
    	content_type: 'application/json'
    },
    body: {
    	parts: [
	        {
            	content: '...',
                featured: true
            },
            {
            	content: '!!!'
            }
        ]
    }
}

_.get(request, 'header.content_type')
// "application/json"

_.get(request, 'body.parts.1.featured')
// true

_.get(request, 'body.parts.*.content')
// ['...', '!!!']

_.has(request, 'body.parts.*.featured')
// false
// only true if all items have the attribute

_.set(request, 'body.parts.*.bool', true)
// now all parts would have an attribute bool: true

// but you can go even deeper like
_.get(request, 'body.users.*.permissions.*.name')
// ['admin', 'editor', 'publisher', 'admin' ...]
// be aware that this does not return unique values, but all the values in order
// if you want unique values though, you can do something like
// https://stackoverflow.com/questions/1960473/get-all-unique-values-in-an-array-remove-duplicates
```

So just to clarify, you can reference arrays of objects with an asterisk (`*`).

Also `_.get` takes a default return value as the third argument (that applies to array values too).

Otherwise everything works as the original modules.
