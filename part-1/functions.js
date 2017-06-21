export default class Functions {

  static weekday(date) {
    let day
    switch (date.getDay()) {
      case 0:
          day = 'Sun';
          break;
      case 1:
          day = 'Mon';
          break;
      case 2:
          day = 'Tue';
          break;
      case 3:
          day = 'Wed';
          break;
      case 4:
          day = 'Thu';
          break;
      case 5:
          day = 'Fri';
          break;
      case 6:
          day = 'Sat';
    }
    if (day === undefined) {
      throw new Error('Not a valid input')
    } else {
      return day
    }
  }

  static snippet(string, maxLength) {
    if (typeof(string) != 'string' || typeof(maxLength) != 'number') {
      throw new Error('Not a valid input')
    }else if (string.length <= maxLength) {
      return string
    } else {
      let snippedStr = string.slice(0, maxLength)
      return snippedStr + '\u2026'
    }
  }

  static numProps(obj) {
    if(typeof(obj) != 'object') {
      throw new Error('Not a valid input')
    } else {
      let props = Object.keys(obj)
      return props.length
    }
  }

  static filterBetween(array, min, max) {
    let filteredArray = []
    if(Array.isArray(array) === false || typeof(min) != 'number' || typeof(max) != 'number') {
      throw new Error('Not a valid input')
    } else {
      for(let i = 0; i < array.length; i++) {
        if(array[i] >= min && array[i] <= max) {
          filteredArray.push(array[i])
        }
      }
      return filteredArray
    }
  }
}
