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
        typeActivity: {
          type: DataTypes.STRING,
          allowNull: false
        },
        contributionType: {
          type: DataTypes.STRING,
          allowNull: true
        },
        aplication: {
          type: DataTypes.STRING,
          allowNull: true
        },
        province: {
          type: DataTypes.STRING,
          allowNull: true
        }
    }

    let config = {
        tableName: 'services',
        timestamps: false,
    }

    const Service = sequelize.define(alias, cols, config);

    Service.associate = function(models){

      Service.hasOne(models.Task, {
        as:'tarea',
        foreignKey: 'service_id'
      });

    }

    return Service; 

}