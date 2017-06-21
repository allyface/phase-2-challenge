import {expect} from 'chai'
import Functions from '../part-1/functions.js'

describe('Functions.weekday()', () => {
  it('should be a function', function() {
    expect(Functions.weekday).to.be.a('function')
  })

  it('should return day of week for given date', () => {
    expect(Functions.weekday(new Date(2017, 5, 15))).to.equal('Thu')
  })

  it('should throw an error when given invalid input', () => {
    expect(Functions.weekday.bind(Functions, new Date(2017, 'a', 16))).to.throw(Error, 'Not a valid input')
  })

})
