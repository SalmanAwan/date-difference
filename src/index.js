import DataReader from './DataReader.js'
import os from 'os'

new DataReader().readTestData().then(
    dates => {
        var array = dates.toString().split(os.EOL)
        console.log(array)
    },
    err => {
        console.log(err)
    }
)


