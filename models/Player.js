module.exports = (sequelize, DataTypes) => {
    const Player = sequelize.define("Player", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name:{
        type: DataTypes.STRING,
        allowNull: false
      },
      age:{
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      gender:{
        type: DataTypes.STRING,
        allowNull: false
      },
      profilePic:{
        type: DataTypes.BLOB,
        allowNull: false
      },
      category:{
        type: DataTypes.STRING,
        allowNull: false
      },
      bat_matches:{
        type: DataTypes.STRING,
        allowNull: true
      },
      bat_runs:{
        type: DataTypes.STRING,
        allowNull: true
      },
      bat_average:{
        type: DataTypes.STRING,
        allowNull: true
      },
      bat_strikeRate:{
        type: DataTypes.STRING,
        allowNull: true
      },
      bowl_matches:{
        type: DataTypes.STRING,
        allowNull: true
      },
      bowl_wickets:{
        type: DataTypes.STRING,
        allowNull: true
      },
      bowl_average:{
        type: DataTypes.STRING,
        allowNull: true
      },
      bowl_economy:{
        type: DataTypes.STRING,
        allowNull: true
      },
      auction_status:{
        type: DataTypes.STRING,
        allowNull: true
      },
      points:{
        type: DataTypes.STRING,
        allowNull: true
      },
    }, {
      createdAt:'TimeStamp',
      updatedAt:false,
    });
    return Player;
  };
  