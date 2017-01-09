import InputProcessor from './InputProcessor'
import MyCalendar from './MyCalendar'

var dates = InputProcessor.readTestData()

dates.forEach((pair) => {
    console.log(pair[0] + ', ' + pair[1] + ', ' + MyCalendar.daysBetween(...pair))
})