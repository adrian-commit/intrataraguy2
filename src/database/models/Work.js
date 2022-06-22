module.exports = (sequelize, DataTypes) => {

    let alias = 'Work'

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
        condition: {
          type: DataTypes.STRING,
          allowNull: false,
          default:'Pendiente'
        }
    }

    let config = {
        tableName: 'works',
        timestamps: false,
    }

    const Work = sequelize.define(alias, cols, config);

    Work.associate = function(models){
      Work.hasOne(models.Service, {
        as: 'servicio',
        foreignKey: 'tarea_id'
      })

      Work.belongsTo(models.Client, {
        as: 'cliente',
        foreignKey:'client'
      })
      
    }
   
    return Work; 

}
