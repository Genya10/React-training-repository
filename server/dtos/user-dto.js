module.exports = class UserDto {
  email;
  id;
  isActivated;

  constructor(model) {
    this.email = model.email;
    this.id = model.email._id;
    this.isActivated = model.isActivated;
  }
};
