const { name } = require("ejs");
const { User } = require("../models/");
const bcrypt = require("bcrypt");

class UserService {
  constructor() {}

  // this method for store registration
  async storeRegistration(user) {
    const existingUser = await User.findOne({ where: { email: user.email } });
    const encryptedPassword = await bcrypt.hash(user.password, 10);

    if (existingUser) {
      throw new Error("Email already exists");
    }
    if (!user.email || !user.password) {
      throw new Error("Email and password are required");
    }

    return await User.create({ ...user, password: encryptedPassword });
  }

  // this method for store login
  async storeLogin(user) {
    // cari user berdasarkan email saja
    const existingUser = await User.findOne({ where: { email: user.email } });

    if (!existingUser) {
      throw new Error("Email or password is incorrect");
    }

    // bandingkan password plain text dengan hash di DB
    const isPasswordValid = await bcrypt.compare(
      user.password,
      existingUser.password,
    );
    if (!isPasswordValid) {
      throw new Error("Email or password is incorrect");
    }

    return existingUser;
  }

  // async getName() {
  //   const data = await User.findOne({where: {name}})
  //   return data
  // }
}

module.exports = UserService;
