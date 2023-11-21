const UserModel = require('../models/user-models');
const bcrypt = require('bcrypt');

class UserService {
  async registration (email,password){
    const candidate = await UserModel.findOne({email})
    if(candidate){
        throw new Error(`Пользователь с адресом ${email} уже существует`)
    }
    const hashPassword = await bcrypt.hash(password,3);
    const user = await UserModel.create({email,password:hashPassword})
  }
}

module.exports = new UserService();