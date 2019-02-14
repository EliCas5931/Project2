module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    userName: {
      type: DataTypes.STRING,
      defaultValue: "guest",
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      defaultValue: "guest"
    }
  },
  {
    timestamps: false
  });

User.associate = function(models) {
  User.hasMany(models.Search, {
    onDelete: "cascade"
  });
};

return User;
};