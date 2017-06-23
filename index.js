/**
 * Turn selectable on or off for an element
 *
 * @module  unselectable
 */

'use strict'


module.exports = function deinterleave (src, stride) {
	if (stride == null) stride = 2

	var planar = Array(src.length), channel, offset, clen = Math.floor(src.length/stride)

	for (var i = 0, l = src.length; i < l; i++) {
		channel = i % stride
		offset = Math.floor(i / stride)

		planar[channel * clen + offset] = src[i]
	}

	for (i = 0; i < l; i++) {
		src[i] = planar[i]
	}

	return src
}
