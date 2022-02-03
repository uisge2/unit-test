const expect = require('chai').expect;
const assert = require('chai').assert;
const mylib = require('../src/mylib');

describe('Unit testing mylib.js', () => {
    it('Should return 2 when using sum function with a=1, b=1', () => {
        const result = mylib.sum(1,1)
        expect(result).to.equal(3)
    })
})