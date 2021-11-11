const express = require("express");

const app = express();
app.use(express.json());



//user Authentication start


const { register, login } = require("./controllers/auth.controller");
const postsController = require("./controllers/post.controller");
const passport = require("./configs/passport.config");

app.post("/register", register);
app.post("/login", login);
app.use("/posts", postsController);

app.use(passport.initialize());

passport.serializeUser(function ({ user, token }, done) {
  done(null, { user, token });
});

passport.deserializeUser(function ({ user, token }, done) {
  done(err, { user, token });
});

app.get("/auth/google/failure", function (req, res) {
  return res.send("Something went wrong");
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000/",
    failureRedirect: "/auth/google/failure",
  }),
  function (req, res) {
    const { user, token } = req.user;
    return res.status(200).json({ user, token });
  }
);





//User authentication end





const carController  = require("./controllers/car.controller");
const busController = require("./controllers/bus.controller");
const tempoController = require("./controllers/tempo.controller");
const orderController = require("./controllers/order.controller");
const bookingController = require('./controllers/booking.controller');
const passengerController = require('./controllers/passenger.controller');


app.use("/car", carController);
app.use("/bus", busController);
app.use("/tempo", tempoController);
app.use("/order", orderController);
app.use('/booking', bookingController);
app.use('/passenger', passengerController);


module.exports =   app;