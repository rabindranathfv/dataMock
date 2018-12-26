const recintos = require('./recintos');
const sensores = require('./sensores');
const zonas = require('./zonas');
const moduleMock = require('./moduleMock');
const rule_chain = require('./rule_chain');
const customers = require('./customers');
const assets = require('./assets');
const devices = require('./devices');
const entity_views = require('./entity_views');
const widgets_library = require('./widgets_library');
const dashboards = require('./dashboards');
const audits_logs = require('./audits_logs');


function data() {
    return {
        recintos,
        sensores,
        zonas,
        moduleMock,
        rule_chain,
        customers,
        assets,
        devices,
        entity_views,
        widgets_library,
        dashboards,
        audits_logs
    }
}
module.exports = data