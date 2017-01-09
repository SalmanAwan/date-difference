import os from 'os'
import fs from 'fs'

class InputProcessor {

    readTestData() {
        const FILE_PATH = './test-data.txt'
        try {
            return fs.readFileSync(FILE_PATH, 'utf8').toString().split(os.EOL)
        } catch (e) {
            console.log('Input file could not be read from ' + FILE_PATH)
        }

    }

}

export { InputProcessor as default }