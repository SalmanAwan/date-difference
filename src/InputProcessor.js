import os from 'os'
import fs from 'fs'

import MyDate from './MyDate'

class InputProcessor {

    static readTestData() {
        const FILE_PATH = './test-data.txt'
        try {
            let dates = fs.readFileSync(FILE_PATH, 'utf8').toString().split(os.EOL)
            return this.processDates(dates)
        } catch (e) {
            console.log('Could not process input file at ' + FILE_PATH)
        }
    }

    static processDates(dates) {
        return dates
            .filter((e)=> this.validateDatePairStr(e))
            .map((e) => this.mapDatePairStrToDates(e))
    }

    static validateDatePairStr(pair) {
        const DATE_PAIR_REGEX = /^\d{2} \d{2} \d{4}, \d{2} \d{2} \d{4}$/
        return pair.trim().match(DATE_PAIR_REGEX)
    }

    static mapDatePairStrToDates(pair) {
        var dates = pair.split(',')
        var from = dates[0].trim().split(/\s/)
        var to = dates[1].trim().split(/\s/)
        return [new MyDate(...from), new MyDate(...to)]
    }

}

export { InputProcessor as default }