class MyCalendar {

    // TODO: Needs debugging
    static daysBetween(from, to) {
        if(!this.isValidRange(from, to)) { return -1 }

        // if(this.isSameMonth(from, to) && this.isSameYear(from, to)) { return to.day - from.day }

        var totalDays = 0

        // for (var y = from.year; y < to.year; y++) {
        //     totalDays += this.isLeapYear(y) ? 366 : 365
        // }
        //
        // for (var m = from.month; m < to.month; m++) {
        //     totalDays += 31
        // }
        //
        // totalDays += (31 - from.day) + to.day

        return totalDays
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

        let sameMonth = this.isSameMonth(from, to)
        let sameYear = this.isSameYear(from, to)

        if(sameYear && from.month > to.month) { return false }
        if (sameYear && sameMonth && from.day > to.day) { return false }
        return true
    }

}

export { MyCalendar as default }