const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: { type: "string", required: false },
    email: { type: "string", required: true, unique: true },
    password: { type: "string", required: true, minLength: 8 },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

//creation of user
userSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  const hashedPassword = bcrypt.hashSync(this.password, 8);
  this.password = hashedPassword;
  return next();
});

//comparing user input with acutal password in hased form
userSchema.methods.checkPassword = function (password) {
  const hook = bcrypt.compareSync(password, this.password);
  return hook;
};

const User = mongoose.model("User", userSchema);
module.exports = User;