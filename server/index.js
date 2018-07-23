require("dotenv").config();
const express = require('express');
const next = require('next');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const errorHandler = require('./handlers/error.js')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const cors = require("cors")
/*** ROUTEs ***/
// var tutorialRoutes = require("./routes/tutorials");
const authRoutes = require("./routes/auth");
const {loginRequired, ensureCorrectUser} = require('./middleware/auth')


app.prepare()
    .then(() => {
        const server = express()

        // Parse application/x-www-form-urlencoded
        server.use(bodyParser.urlencoded({ extended: true }));
        // Parse application/json
        server.use(bodyParser.json());
        // Allows for cross origin domain request:
        server.use(cors())
        // is this redundant?
        server.use(function(req, res, next) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            next();
        });


        /*** ROUTE PREFIXING ***/
        // server.use('/api/tutorials', tutorialRoutes);
        server.use('/api/auth', authRoutes);
        
        /*** Dynamic page generation ***/
        server.get('/tutorial/:id', (req, res) => {
        		console.log(req.params)
            const actualPage = '/tutorial'
            const queryParams = { id: req.params.id} 
            app.render(req, res, actualPage, queryParams)
        })




        /*** Handling errors nicely! ***/
        // if none of those routes are reached
        // use next to bubble up our err handling
        server.use((req, res, next) => {
            let err = new Error("not found!");
            err.status = 404;
            next(err);
        })
        // error handling
        server.use(errorHandler)

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(port, (err) => {
            if (err) throw err
            console.log('> see the magic at: http://localhost:' + port)
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })