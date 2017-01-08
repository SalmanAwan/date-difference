import promise from 'bluebird'
import fs from 'fs'

var fsAsync = promise.promisifyAll(fs);

class DataReader {

    readTestData() {
        return fsAsync.readFileAsync('./test-data.txt', 'utf8')
    }

}

export { DataReader as default }