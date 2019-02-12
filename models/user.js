module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    userName: {
      type: DataTypes.STRING,
      defaultValue: "guest"
    },
    password: {
      type: DataTypes.STRING,
      defaultValue: "guest"
    }
  });

User.associate = function(models) {
  User.hasMany(models.Search, {
    onDelete: "cascade"
  });
};

return User;
};