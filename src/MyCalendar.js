import MyDate from './MyDate'

class MyCalendar {

    static daysBetween(from, to) {
        if(!this.isValidDate(from) || !this.isValidDate(to)) { return -1 }

        if(!this.isValidRange(from, to)) { return -1 }

        if(this.isSameYear(from, to) && this.isSameMonth(from, to)) { return to.day - from.day + 1 }

        let totalDays = 0
        if(this.isSameYear(from, to)) {

            totalDays += this.daysBetween(from, this.lastDateOfMonth(from))

            for(let m = from.month + 1; m < to.month; m++) {
                totalDays += this.getDaysOfMonth(new MyDate(String(1), String(m), String(from.year)))
            }

            totalDays += to.day

        } else {

            let endOfFromYear = this.lastDateOfYear(from.year)
            totalDays += this.daysBetween(from, endOfFromYear)

            for (let y = from.year + 1; y < to.year; y++) {
                totalDays += this.getDaysOfYear(y)
            }

            let startOfToYear = this.firstDateOfYear(to.year)
            totalDays += this.daysBetween(startOfToYear, to)
        }

        return totalDays
    }

    static getDaysOfYear(year) {
        return this.isLeapYear(year) ? 366 : 365
    }

    static getDaysOfMonth(date) {
        const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        const FEBRUARY = 2

        let {month, year} = date

        let daysOfMonth = DAYS_IN_MONTH[month - 1]

        if(this.isLeapYear(year) && month == FEBRUARY) { daysOfMonth += 1 }

        return daysOfMonth
    }

    static isLeapYear(year) {
        return year && year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)
    }

    static isSameYear(from, to) {
        return from.year === to.year
    }

    static isSameMonth(from, to) {
        return from.month === to.month
    }

    static isValidRange(from, to) {
        if(from.year > to.year) { return false }

        let sameYear = this.isSameYear(from, to)
        let sameMonth = this.isSameMonth(from, to)

        if(sameYear && from.month > to.month) { return false }
        if (sameYear && sameMonth && from.day > to.day) { return false }
        return true
    }

    static lastDateOfYear(year) {
        return new MyDate(31, 12, year)
    }

    static firstDateOfYear(year) {
        return new MyDate(1, 1, year)
    }

    static lastDateOfMonth(date) {
        let totalDaysInMonth = this.getDaysOfMonth(date)
        let {month, year} = date
        return  new MyDate(totalDaysInMonth, month, year)
    }

    static isValidDate(date) {
        return date && this.isValidDay(date) && this.isValidMonth(date) && this.isValidYear(date.year)
    }

    static isValidDay(date) {
        let {day} = date
        return 1 <= day && day <= this.getDaysOfMonth(date)
    }

    static isValidMonth(date) {
        let {month} = date
        return 1 <= month && month <= 12
    }

    static isValidYear(year) {
        return 1 <= year && year <= 9999
    }

}

export { MyCalendar as default }