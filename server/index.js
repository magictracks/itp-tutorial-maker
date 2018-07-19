const express = require('express');
const next = require('next');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

var tutorialRoutes = require("./routes/tutorials");


app.prepare()
    .then(() => {
        const server = express()


        // Parse application/x-www-form-urlencoded
        server.use(bodyParser.urlencoded({ extended: true }));
        // Parse application/json
        server.use(bodyParser.json());

        // Allows for cross origin domain request:
        server.use(function(req, res, next) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            next();
        });

        server.get('/tutorial/:id', (req, res) => {
        		console.log(req.params)
            const actualPage = '/tutorial'
            const queryParams = { id: req.params.id} 
            app.render(req, res, actualPage, queryParams)
         })

        // server.get('/', function(req, res){
        //     res.sendFile("index.html");
        // });

        server.use('/api/tutorials', tutorialRoutes);


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