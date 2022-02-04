const expect = require('chai').expect;
const assert = require('chai').assert;
const should = require('chai').should();
const mylib = require('../src/mylib');

describe('Unit testing mylib.js', () => {

    let myvar = undefined
    before(() => {
        console.log('Hello from before')
        myvar = 1
    })
    it('Should return 2 when using sum function with a=1, b=1', () => {
        const result = mylib.sum(1,1)
        expect(result).to.equal(2)
    })
    it('Should return the correct year', () => {
        const d = new Date()
        expect(d.getFullYear()).to.equal(mylib.year())
    })
    it('Assert foo is not bar', () => {
        assert('foo' !== 'bar')
    })
    it('myvar should exist', () => {
        console.log('Hello from the middle')
        should.exist(myvar)
    })
    after(() => {
        console.log('Hello from after')
        myvar = undefined
    })
})