module.exports = (sequelize, DataTypes) => {
    const Team = sequelize.define("Team", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name:{
        type: DataTypes.STRING,
        allowNull: false
      },
      owner:{
        type: DataTypes.STRING,
        allowNull: false
      },
      totalKitty:{
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      kittyLeft:{
        type: DataTypes.DECIMAL,
        allowNull: false
      },
    }, {
      createdAt:'TimeStamp',
      updatedAt:false,
    });
    return Team;
  };
  