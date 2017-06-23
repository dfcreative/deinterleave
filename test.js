'use strict'

let assert = require('assert')
let deinterleave = require('./')



// let arr = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1]
// deinterleave(arr, 2)

// assert.deepEqual(arr, [0,0,0,0,0, 1,1,1,1,1])



let arr = ['00', '01', '02', '10', '11', '12', '20', '21', '22']
deinterleave(arr, 3)
