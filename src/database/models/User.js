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

      User.belongsToMany(models.Service, {
        as: 'servicios',
        through: 'users_services',
        foreignKey: 'user_id',
        otherKey: 'service_id',
        timestamps: false
      });

    }

    return User; 

}