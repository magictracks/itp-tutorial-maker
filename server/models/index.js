var mongoose = require('mongoose');
mongoose.set('debug', true);
require('mongoose-type-url');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/itp-tutorial-maker', {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE
});

module.exports.Tutorial = require("./tutorial");
module.exports.Resource = require("./resource");
module.exports.Section = require("./section");