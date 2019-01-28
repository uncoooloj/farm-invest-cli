const program = require('commander')

program
    .parse(process.argv);

(async () => {
    try {
        const syncEFarms = require('./farm-invest-cli-efarms')
        const syncFarmCrowdy = require('./farm-invest-cli-farm-crowdy')
        const syncThriveAgric = require('./farm-invest-cli-thrive-agric')

        await syncEFarms()
        await syncFarmCrowdy()
        await syncThriveAgric()
    }
    catch (ex) {
        console.error(ex)
    }
})()