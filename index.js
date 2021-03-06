const recintos = require('./recintos');
const sensores = require('./sensores');
const zonas = require('./zonas');
const home = require('./home');
const rule_chains = require('./rule_chains');
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
        home,
        rule_chains,
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