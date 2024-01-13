const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, returnedObj) {
        delete returnedObj.password;
      },
    },
  }
);

userSchema.methods.matchPassword = async function (enteredPass) {
  return await bcrypt.compare(enteredPass, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
