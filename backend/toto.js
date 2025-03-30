const express = require("express");
const cookieParser = require("cookie-parser");
const bcrypt = require('bcrypt');

const app = express();

app.use(cookieParser());

app.get("/", function (req, res) {
      // bcrypt.genSalt(10, function(err, salt) {
      //     console.log(salt);
      //     res.send("Salt generated!"); 
      // }); ye bcrypt ka seen hai vase hai 

      res.send("working")
  });


// app.get("/read", function (req, res) {
//   console.log(req.cookies);
//   res.send("ho gaya chal raha hai ");
// });

app.listen(3000);
