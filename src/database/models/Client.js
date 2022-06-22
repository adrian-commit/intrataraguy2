module.exports = (sequelize, DataTypes) => {

    let alias = 'Client'

    let cols = {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true 
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        businessName: {
          type: DataTypes.STRING,
          allowNull: false
        },
        typePerson: {
          type: DataTypes.STRING,
          allowNull: false
        },
        cuit: {
          type: DataTypes.BIGINT,
          allowNull: false
        },
        officesQuantity: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        staffQuantity: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        typeActivity: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        timeExerciseEnd: {
          type: DataTypes.DATEONLY,
          allowNull: true
        }
    }

    let config = {
        tableName: 'clients',
        timestamps: false,
    }

    const Client = sequelize.define(alias, cols, config);

    Client.associate = function(models){

      Client.belongsToMany(models.Service, {
        as: 'servicios',
        through: 'clients_services',
        foreignKey: 'client_id',
        otherKey: 'service_id',
        timestamps: false
      });

      Client.hasMany(models.Work, {
        as:'tarea',
        foreignKey: 'client'
      })

    }
   
    return Client; 

}