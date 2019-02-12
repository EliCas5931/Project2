module.exports = function(sequelize, DataTypes) {
    var Search = sequelize.define("Search", {
      searchTerm: DataTypes.STRING
      
    });
    
    Search.associate = function(models) {
        Search.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        });
      };
    
      return Search;
    };