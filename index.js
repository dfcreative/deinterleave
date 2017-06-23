/**
 * Turn selectable on or off for an element
 *
 * @module  unselectable
 */

'use strict'


module.exports = function deinterleave (src, stride) {
	if (stride == null) stride = 2

	var total = src.length,
		l = Math.floor(src.length / stride),
		mem, from, to, i

	for (i = 1; i < l; i++) {
		console.log(src)
		mem = null
		from = i
		to = i2p(from)

		while (to != i) {
			mem = move(from, to, mem)
			from = to
			to = i2p(to)
			console.log(from, to)
		}
		if (mem != null) src[i] = mem
	}
		console.log(src)

	//interleaved index to planar
	function i2p (idx) {
		var channel = idx % stride
		var offset = Math.floor(idx / stride)
		return channel * l + offset
	}

	function move (from, to, mem) {
		var tmp = src[to]
		src[to] = src[from]
		if (mem != null) src[from] = mem
		return tmp
	}
}
