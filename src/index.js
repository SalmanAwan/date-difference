import InputProcessor from './InputProcessor'
import MyCalendar from './MyCalendar'

/*
// https://en.wikipedia.org/wiki/Leap_year
var arr = [1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2016]
arr.forEach((y) => {
    console.log(y + ' ' + MyCalendar.isLeapYear(y))
})
*/


var dates = InputProcessor.readTestData()

dates.forEach((pair) => {
    console.log(pair[0].str + ', ' + pair[1].str + ', ' + MyCalendar.daysBetween(...pair))

    // console.log(pair[0].str + ',' + pair[1].str +
    //     ' Is same month: ' + MyCalendar.isSameMonth(...pair) +
    //     ' Is same year: ' + MyCalendar.isSameYear(...pair) +
    //     ' Is smaller than: ' + MyCalendar.isValidRange(pair[0], pair[1]))

})