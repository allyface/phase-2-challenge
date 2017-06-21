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

describe.only('Functions.snippet()', () => {
  it('should be a function', function() {
    expect(Functions.snippet).to.be.a('function')
  })

  it('should return a string shortened to the maxLength', () => {
    expect(Functions.snippet('For the following exercises,', 10)).to.equal('For the fo…')
  })

  it('should return the full string if less than maxLength', () => {
    expect(Functions.snippet('Hello, world!', 20)).to.equal('Hello, world!')
  })

  it('should throw an error when given invalid input', () => {
    expect(Functions.snippet.bind(Functions, 'Hi', 'a')).to.throw(Error, 'Not a valid input')
  })
})
