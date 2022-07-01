module.exports = (sequelize, DataTypes) => {

    let alias = 'User'

    let cols = {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true 
        },
        userName: {
          type: DataTypes.STRING,
          allowNull: false
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false
        },
        password: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        team_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        is_admin: {
          type: DataTypes.BOOLEAN,
          allowNull:false,
          defaultValue: false
        }
    }

    let config = {
        tableName: 'users',
        timestamps: false,
    }

    const User = sequelize.define(alias, cols, config);

    User.associate = function(models){
      User.hasOne(models.DataUser, {
        as: 'data',
        foreignKey: 'user_id'
      });

      User.hasMany(models.Client, {
        as: 'clientes',
        foreignKey: 'user_id'
      });

      User.belongsTo(models.Team, {
        as:'equipo',
        foreignKey:'team_id'
      })

    }

    return User; 

}