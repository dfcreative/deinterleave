# deinterleave [![unstable](https://img.shields.io/badge/stability-unstable-green.svg)](http://github.com/badges/stability-badges) [![Build Status](https://img.shields.io/travis/dfcreative/deinterleave.svg)](https://travis-ci.org/dfcreative/deinterleave)

Deinterleaves elements in an array.

[![npm install deinterleave](https://nodei.co/npm/deinterleave.png?mini=true)](https://npmjs.org/package/deinterleave/)

```js
const deinterleave = require('deinterleave')

let array = [1,1,1,1,0,0,0,0]

deinterleave(array, 2)

// array is [1,0,1,0,1,0,1,0]
```

## API

### deinterleave(source, stride=2)

Rearrange source elements so that it has planar layout:

`[a0,b0,c0, a1,b1,c1, ...]` → `[a0,a1,a2,..., b0,b1,b2,..., c0,c1,c2]`

Source can be an _Array_ or _TypedArray_. `stride` indicates number of elements per group, ie. number of channels.

## License

© 2017 Dima Yv. MIT License
