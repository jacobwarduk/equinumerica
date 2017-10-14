# equinumerica

[![npm](https://img.shields.io/npm/dt/equinumerica.svg)](https://www.npmjs.com/package/equinumerica) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)  [![Build Status](https://travis-ci.org/jacobwarduk/equinumerica.svg?branch=master)](https://travis-ci.org/jacobwarduk/equinumerica) [![codecov](https://codecov.io/gh/jacobwarduk/equinumerica/branch/master/graph/badge.svg)](https://codecov.io/gh/jacobwarduk/equinumerica)

**Get the indices in an array where the sum of the preceding elements is equal to the sum of the remaining elements**

 > Given an array of integers, returns any indices, such that `0 ≤ P < N` and the sum of the elements in the lower indices is equal to the sum of the elements in the higher indices.
 In the event the array has no such points, `NaN` will be returned.
 
 
### Installation
`npm install equinumerica`
 
### Usage
```javascript
const equinumerica = require('equinumerica');

equinumerica([-1, 3, -4, 5, 1, -6, 2, 1]); //--> [1, 3, 7]
```




