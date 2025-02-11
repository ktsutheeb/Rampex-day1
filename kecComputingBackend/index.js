var express = require("express");
var app = express();
var path = require("path");
var mdb = require("mongoose");
var cors = require("cors");
var env = require("dotenv");
//npm install express cors path dotenv mongoose
const User = require("./models/user"); // *******file name user //import user_schema from "./models/user";  >> app crash since b.e does'nt know import , it knows require

env.config();
app.use(cors());
app.use(express.json()); //pradeepan putten destructing problem (sir wrriten)

const PORT = process.env.PORT;
 //const PORT = 3001;
mdb
  // .connect("mongodb://localhost:27017") //mongodb://localhost:27017/   some laptop localhost not working use 127.0.0.1(for localhost replace)
  .connect(process.env.MONGO_URL) //with the atlas
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
  // var { firstName, lastName, email, password } = req.body;
  // //body in thunder cliend or postman
  try {
    // var newUser = new User({
    //   firstName: firstName,
    //   lastName: lastName,
    //   email: email,
    //   password:password,
    // });
    // destructing ^^^
    var newUser = new User(req.body);
    console.log(req.body.password);
    console.log("user added successfully");
    if (newUser.save()) {
      res.json({ message: "User added Successfully", issignup: true });
    } else {
      res.json({ message: "User Not added ", issignup: false });
      //status 200 depolyed
    }
  } catch (err) {
    console.log(err);
  }
});
// app.get("/getsignup", async (req, res) => {
//   //without async and await the multiple record can't be displayed . real world ex if the guest comes to anna university and students have a semister(which cannot be postponed) , the guesh is the one should be waiting.
//   try {
//     var allSignUpRecords = await User.find();
//     res.json(allSignUpRecords);
//   } catch {
//     console.log("cannot able to read the records");
//     res.send(err);
//   }
// });

app.post("/login", async (req, res) => {
  var { email, password } = req.body;
  try {
    var existingUser = await User.findOne({ email: email }); //or not find , find shouldnot be used because // but //without await amd async , not waiting to give output , o/p fast in sync , so without await and async the output is not readable..
    console.log(existingUser);

    if (existingUser) {
      if (existingUser.password != password) {
        res.json({ message: "Invalid Credentials", isLoggedIn: false });
      } else {
        res.json({ message: "Login Successfull", isLoggedIn: true });
      }
    } else {
      res.json({ message: "Login Fail ", isLoggedIn: false });
    }
  } catch {
    console.log("catch");
  }
});

app.listen(PORT, () => {
  console.log(`backend server start \n Url: http://localhost:${PORT}`);
});
//app.listen(PORT)
