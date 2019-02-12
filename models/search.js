module.exports = function(sequelize, DataTypes) {
    var Search = sequelize.define("Search", {
      searchTerm: DataTypes.STRING
      /// need to include user performing search
    });
    return Search;
  };