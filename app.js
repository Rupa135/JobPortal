const express = require("express")
const sequelize = require("./util/database")
const routes = require("./routes/details")
const User = require("./models/user")
const bodyParser = require("body-parser")
const cors = require("cors")
const positionsRoute = require("./routes/openPositions")
const positions = require("./models/jobPostion")

const app = express()

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json())
// app.use(cors)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

app.use(routes)
app.use(positionsRoute)

sequelize
.sync({force : true})
// .sync()
.then(result => {
    console.log("Resync done!!")
    app.listen(PORT, console.log(`Server started on port ${PORT}`));
})
.catch(err => {
    console.log(err)
})



