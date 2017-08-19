# equinumerica

**Get the indices in an array where the sum of the preceding elements is equal to the sum of the remaining elements**

 > Given an array of integers, returns any indices, such that `0 ≤ P < N` and the sum of the elements in the lower indices is equal to the sum of the elements in the higher indices.
 In the event the array has no such points, `NaN` will be returned.
 
 
### Installation
`npm install equinumerica`

##### ES6 Modules
`import equinumerica from 'equinumerica'`

##### CommonJS (Node)
`const equinumerica = require('equinumerica')`
 
### Usage
```javascript
equinumerica([-1, 3, -4, 5, 1, -6, 2, 1]); //--> [1, 3, 7]
```




