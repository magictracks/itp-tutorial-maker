var css = require('sheetify')
var choo = require('choo')

css('tachyons')

css`
html{
  width:100%;
  height:100%;
}
`
var app = choo()
if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
} else {
  app.use(require('choo-service-worker')())
}

app.use(require('./stores/clicks'))
app.use(require('./stores/user'))
app.use(require('./stores/db'))

app.route('/', require('./views/main'))
app.route('/create', require('./views/create'))
app.route('/browse', require('./views/browse'))
app.route('/search', require('./views/search'))
app.route('/edit', require('./views/edit'))
app.route('/preview', require('./views/preview'))
app.route('/*', require('./views/404'))


module.exports = app.mount('body')
