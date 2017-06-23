# deinterleave [![unstable](https://img.shields.io/badge/stability-unstable-green.svg)](http://github.com/badges/stability-badges) [![Build Status](https://img.shields.io/travis/dfcreative/deinterleave.svg)](https://travis-ci.org/dfcreative/deinterleave)

Deinterleaves elements in an array.

[![npm install deinterleave](https://nodei.co/npm/deinterleave.png?mini=true)](https://npmjs.org/package/deinterleave/)

```js
const deinterleave = require('deinterleave')

let array = [1,0,1,0,1,0,1,0]
deinterleave(array, 2)

// array is [1,1,1,1,0,0,0,0]
```

## API

### deinterleave(source, stride=2)

Rearrange source elements so that it has planar layout:

`[a,b,c, a,b,c, ...]` → `[a,a,a,..., b,b,b,..., c,c,c]`

Source can be an _Array_, _TypedArray_ or any array-like object. `stride` indicates number of elements per group, eg. in case of audio buffer it is number of channels.

## License

© 2017 Dima Yv. MIT License
