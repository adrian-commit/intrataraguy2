module.exports = (sequelize, DataTypes) => {

    let alias = 'Task'

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
        type: {
          type: DataTypes.STRING,
          allowNull: false
        },
        date: {
          type: DataTypes.DATEONLY,
          allowNull: false
        },
        client: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        team: {
          type: DataTypes.STRING,
          allowNull: false
        },
        observations: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        timeBeginning: {
          type: DataTypes.TIME,
          allowNull: false
        },
        timeEnd: {
          type: DataTypes.TIME,
          allowNull: false
        },
        timePause: {
          type: DataTypes.TIME,
          allowNull: true
        },
        timeContinue: {
          type: DataTypes.TIME,
          allowNull: true
        },
        totalTime: {
          type: DataTypes.TIME,
          allowNull:true
        },
        condition: {
          type: DataTypes.STRING,
          allowNull: false,
          default:'Pendiente'
        }
    }

    let config = {
        tableName: 'tasks',
        timestamps: false,
    }

    const Task = sequelize.define(alias, cols, config);

    Task.associate = function(models){
      Task.hasOne(models.Service, {
        as: 'servicio',
        foreignKey: 'tarea_id'
      })

      Task.belongsTo(models.Client, {
        as: 'cliente',
        foreignKey:'client'
      })
      
    }
   
    return Task; 

}
