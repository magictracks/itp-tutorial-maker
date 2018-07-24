require("dotenv").config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const errorHandler = require('./handlers/error.js')
const cors = require("cors")


/*** ROUTEs ***/
const db = require("./models")
const authRoutes = require("./routes/auth");
const {loginRequired, ensureCorrectUser} = require('./middleware/auth')
var tutorialRoutes = require("./routes/tutorials");


// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// Parse application/json
app.use(bodyParser.json());
// Allows for cross origin domain request:
app.use(cors())
// is this redundant?
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});


/*** ROUTE PREFIXING ***/
// server.use('/api/tutorials', tutorialRoutes);
app.use('/api/auth', authRoutes);

app.use("/api/users/:id/tutorials",
  loginRequired,
  ensureCorrectUser,
  tutorialRoutes)

// get all tutorials for public consumption
app.get("/api/tutorials/all", async function(req, res, next){
  try{

    let tutorials = await db.Tutorial.find()
                            .sort()
                            .populate("user", {
                              username: true,
                              profileImageUrl:true
                            })
    return res.status(200).json(tutorials)
  } catch(err){
    return next(err);
  }
})

/*** Dynamic page generation ***/
// app.get('/tutorial/:id', (req, res) => {
//     console.log(req.params)
//     const actualPage = '/tutorial'
//     const queryParams = { id: req.params.id} 
//     app.render(req, res, actualPage, queryParams)
// })


// server.get("/", (req,  res)=>{
//   app.render(req,res, "/")
// })



/*** Handling errors nicely! ***/
// if none of those routes are reached
// use next to bubble up our err handling
app.use((req, res, next) => {
    let err = new Error("not found!");
    err.status = 404;
    next(err);
})
// error handling
app.use(errorHandler)



app.listen(port, (err) => {
    if (err) throw err
    console.log('> see the magic at: http://localhost:' + port)
})