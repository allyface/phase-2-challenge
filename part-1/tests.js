import {expect} from 'chai'
import Functions from '../part-1/functions.js'

describe('Functions.weekday()', () => {
  it('should return day of week for given date', () => {
    expect(Functions.weekday(new Date(2017, 5, 15))).to.equal('Thu')
  })

  it('should throw an error when given invalid input', () => {
    expect(Functions.weekday.bind(Functions, new Date(2017, 'a', 16))).to.throw(Error, 'Not a valid input')
  })
})

describe('Functions.snippet()', () => {
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

describe.only('Functions.numProps()', () => {
  let friend = {
  name: 'Dominique',
  age: 30,
  phone: '555-555-5555'
  }

  it('should return the number of properties in an object', () => {
    expect(Functions.numProps(friend)).to.equal(3)
  })

  it('should throw an error when given invalid input', () => {
    expect(Functions.numProps.bind(Functions, 5)).to.throw(Error, 'Not a valid input')
  })
})
