const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  location: String,
  username: String,
  password: String,
});

userSchema.pre("save", function (next) {
  const user = this;

  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(10, function (salterror, salt) {
      if (salterror) {
        return next(salterror);
      } else {
        console.log(user.password);
        bcrypt.hash(user.password, salt, function (hasherror, hash) {
          if (hasherror) {
            next(hasherror);
          } else {
            user.password = hash;
            console.log(hash);
            next();
          }
        });
      }
    });
  } else {
    next();
  }
});

userSchema.methods.comparePassword = function (password) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, this.password, function (error, isMatch) {
      if (error) {
        reject(error);
      } else {
        resolve(isMatch);
      }
    });
  });
};

module.exports = mongoose.model("User", userSchema);
