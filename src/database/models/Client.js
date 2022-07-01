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
        },
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
    }

    let config = {
        tableName: 'clients',
        timestamps: false,
    }

    const Client = sequelize.define(alias, cols, config);

    Client.associate = function(models){

      Client.belongsTo(models.User, {
        as:'usuario',
        foreignKey:'user_id'
      })

      Client.hasMany(models.Task, {
        as:'tareas',
        foreignKey: 'client'
      })

    }
   
    return Client; 

}