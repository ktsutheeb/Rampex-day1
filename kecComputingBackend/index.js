var express = require("express");
var app = express();
var path = require("path");
var mdb = require("mongoose");

const User = require("./models/user"); // *******file name user //import user_schema from "./models/user";  >> app crash since b.e does'nt know import , it knows require

app.use(express.json()); //pradeepan putten destructing problem (sir wrriten)

const PORT = 3001;
mdb
  .connect("mongodb://localhost:27017") //mongodb://localhost:27017/   some laptop localhost not working use 127.0.0.1(for localhost replace)
  .then(() => {
    console.log("MongoDB connection successful");
  })
  .catch(() => {
    console.log("Check your connection String"); //the url to connect b.e mongodb
  });
// app.get("/", (req, res) => {
//   //"/" route
//   res.send("welcome to backend server");
// });
// app.get("/json", (req, res) => {
//   //"/" route
//   res.json({ server: "backend server", url: "localhost", prt: PORT });
// });
// app.get("/static", (req, res) => {
//   console.log(__dirname);
//   res.sendFile(path.join(__dirname, "index.html"));
// });

app.post("/signup", (req, res) => {
  var { firstName, lastName, id } = req.body;//destructing
  try {
    var newUser = new User({
      firstName: firstName,
      lastName: lastName,
      id: id,
    });
    newUser.save();
    console.log("user added successfully");
    res.status(200).send("user added successfully"); //status 200 depolyed
  } catch (err) {
    console.log(err);
  }
});
app.get("/getsignup",async (req, res) => { //without async and await the multiple record can't be displayed . real world ex if the guest comes to anna university and students have a semister(which cannot be postponed) , the guesh is the one should be waiting. 
  try {
    var allSignUpRecords =await User.find()
    res.json(allSignUpRecords)
  }
  catch {
    console.log("cannot able to read the records")
    res.send(err)
  }
})

app.listen(PORT, () => {
  console.log(`backend server start \n Url: http://localhost:${PORT}`);
});
//app.listen(PORT)
