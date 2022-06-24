module.exports = (sequelize, DataTypes) => {

    let alias = 'Service'

    let cols = {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true 
        },
        type: {
          type: DataTypes.STRING,
          allowNull: false
        },
        tarea_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
    }

    let config = {
        tableName: 'services',
        timestamps: false,
    }

    const Service = sequelize.define(alias, cols, config);

    Service.associate = function(models){

      Service.belongsTo(models.Task, {
        as:'tarea',
        foreignKey: 'tarea_id'
      });
      
      Service.belongsToMany(models.User, {
        as: 'usuarios',
        through: 'users_services',
        foreignKey: 'service_id',
        otherKey: 'user_id',
        timestamps: false
      });

      Service.belongsToMany(models.Client, {
        as: 'clientes',
        through: 'clients_services',
        foreignKey: 'service_id',
        otherKey: 'client_id',
        timestamps: false
      });

    }

    return Service; 

}