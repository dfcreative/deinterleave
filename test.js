'use strict'

let assert = require('assert')
let deinterleave = require('./')
let t = require('tape')


t('2 channels', t => {
	let arr = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1]
	deinterleave(arr, 2)

	t.deepEqual(arr, [0,0,0,0,0, 1,1,1,1,1])
	t.end()
})


t('3 channels', t => {
	let arr = ['00', '01', '02', '10', '11', '12', '20', '21', '22']
	deinterleave(arr, 3)

	t.deepEqual(arr, ['00', '10', '20', '01', '11', '21', '02', '12', '22'])
	t.end()
})
