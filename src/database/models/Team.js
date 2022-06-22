module.exports = (sequelize, DataTypes) => {

    let alias = 'Team'

    let cols = {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true 
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false
        }
    }

    let config = {
        tableName: 'teams',
        timestamps: false,
    }

    const Team = sequelize.define(alias, cols, config);

    Team.associate = function(models){

      Team.hasMany(models.User, {
        as:'usuario',
        foreignKey: 'team_id'
      });
    }

    return Team; 

}