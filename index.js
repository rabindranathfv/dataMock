const recintos = require('./recintos');
const sensores = require('./sensores');
const zonas = require('./zonas');
const moduleMock = require('./moduleMock');
const ruleChain = require('./rule_chain');
const customers = require('./customers');
const asset = require('./assets');
const devices = require('./devices');
const entityViews = require('./entity_views');
const WidgetsLibrary = require('./widgets_library');
const dashboard = require('./dashboards');
const auditsLogs = require('./audits_logs');


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