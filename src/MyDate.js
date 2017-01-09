class MyDate {

    constructor(d, m, y) {
        this.day = Number.parseInt(d)
        this.month = Number.parseInt(m)
        this.year = Number.parseInt(y)
    }
}

export { MyDate as default }