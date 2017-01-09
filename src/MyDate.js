import { pad } from './StringUtils'

class MyDate {

    constructor(d, m, y) {
        this.day = Number.parseInt(d)
        this.month = Number.parseInt(m)
        this.year = Number.parseInt(y)
    }

    toString() {
        return [pad(this.day), pad(this.month), this.year].join(' ')
    }

}

export { MyDate as default }