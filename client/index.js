var css = require('sheetify')
var choo = require('choo')

css('tachyons')
var app = choo()
if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
} else {
  app.use(require('choo-service-worker')())
}

/* --- Access your stores --- */
app.use(require('./stores/clicks'))
app.use(require('./stores/hellos'))


/* --- Set your routes --- */
app.route('/', require('./views/main'))
app.route('/*', require('./views/404'))

/* --- Mount your app to the document body --- */
module.exports = app.mount('body')
