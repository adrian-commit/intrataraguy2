module.exports = (sequelize, DataTypes) => {

    let alias = 'DataUser'

    let cols = {
        id:  {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true 
        },
        firstName: {
          type: DataTypes.STRING,
          allowNull: true
        },
        lastName: {
          type: DataTypes.STRING,
          allowNull: true
        },
        dni: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        telephone: {
          type: DataTypes.BIGINT,
          allowNull: true
        },
        birthDay: {
          type: DataTypes.DATEONLY,
          allowNull: true
        },
        profession: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        hobbie: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        childrens: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
          defaultValue: false
        },
        team: {
          type: DataTypes.STRING,
          allowNull: true
        },
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
    }

    let config = {
        tableName: 'datausers',
        timestamps: false,
    }

    const DataUser = sequelize.define(alias, cols, config);

    DataUser.associate = function(models){
      DataUser.belongsTo(models.User, {
        as: 'usuario',
        foreignKey: 'user_id'
      })
      
    }

    return DataUser; 

}