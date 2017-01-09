import InputProcessor from './InputProcessor'
import MyCalendar from './MyCalendar'

var dates = InputProcessor.readTestData()

dates.forEach((pair) => {
    console.log(pair[0].str + ', ' + pair[1].str + ', ' + MyCalendar.daysBetween(...pair))
})