const fs = require('fs')
const path = require('path')

const read = dir => {
    return JSON.parse(fs.readFileSync(path.resolve(__dirname, `../model/${dir}`), { encoding: 'utf-8', flag: 'r'}))
}

const write = (dir, data) => {
    return fs.writeFileSync(path.resolve(__dirname, `../model/${dir}`), JSON.stringify(data, null, 4))
}

module.exports = {
    read,
    write
}