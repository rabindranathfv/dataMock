const recintos = require('./recintos');
const sensores = require('./sensores');
const zonas = require('./zonas');
const moduleMock = require('./moduleMock');
const ruleChain = require('./ruleChain');
const customers = require('./customers');
const asset = require('./asset');
const devices = require('./devices');
const entityViews = require('./entityViews');
const WidgetsLibrary = require('./WidgetsLibrary');
const dashboard = require('./dashboard');
const auditsLogs = require('./auditsLogs');


function data() {
    return {
        recintos,
        sensores,
        zonas,
        moduleMock,
        ruleChain,
        customers,
        asset,
        devices,
        entityViews,
        WidgetsLibrary,
        dashboard,
        auditsLogs
    }
}
module.exports = data