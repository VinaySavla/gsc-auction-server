const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");
const { Team } = require("../models");
const { Player } = require("../models");
const { User } = require("../models");

// Creates a new Player on database
router.post("/addplayer", async (req, res) => {
  const bodyData = req.body;
  const createResponse = await Player.create(bodyData);
  res.header({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
  });
  res.json(createResponse);
});

// Creates a new Team on database
router.post("/addteam", async (req, res) => {
  const bodyData = req.body;
  const createResponse = await Team.create(bodyData);
  res.header({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
  });
  res.json(createResponse);
});

// Creates a new User on database
router.post("/adduser", async (req, res) => {
  const bodyData = req.body;
  const createResponse = await User.create(bodyData);
  res.header({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
  });
  res.json(createResponse);
});

// Verify User on database
router.post("/signin", async (req, res) => {
  const bodyData = req.body;
  const createResponse = await User.findOne({
    where: {
      email: bodyData.email,
      password: bodyData.password,
    },
  });
  res.header({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
  });
  res.json(createResponse);
});

// Gets the player by id
router.get("/getplayer/:id", async (req, res) => {
  const playerID = req.params.id;
  // console.log(ProductID);
  const playerData = await Player.findByPk(playerID, {
    include: [
      {
        model: Team,
        as: "team",
      },
    ],
  });
  res.header({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
  });
  res.json(playerData);
});

// Gets the team by id
router.get("/getteam/:id", async (req, res) => {
  const TeamID = req.params.id;
  const teamData = await Team.findAll({
    where: {
      id: TeamID
    },
    include: [
      {
        model: Player,
        as: "players",
      },
    ],
  });
  res.header({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
  });
  res.json(productData);
});

// Gets the user by id
router.get("/getuser/:id", async (req, res) => {
  const UserID = req.params.id;
  // console.log(SubCategoryID);
  const productData = await User.findAll({
    where: {
      id: UserID
    },
  });
  res.header({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
  });
  res.json(productData);
});


// Gets all the Team
router.get("/getteams", async (req, res) => {
  const TeamList = await Team.findAll({
    include: [
      {
        model: Player,
        as: "player",
      },
    ],
    //order condition
    // order: [["TimeStamp", "DESC"]],
  });
  res.header({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
  });
  res.json(TeamList);
});

// Gets all the Players by Team
router.get("/getplayersbyteam/:teamID", async (req, res) => {
  const TeamID = req.params.teamID;
  const PlayerList = await Player.findAll({
    where:{
      TeamID: TeamID,
    },
    include: [
      {
        model: User,
        as: "subcategory",
      },
    ],
    //order condition
    // order: [["TimeStamp", "DESC"]],
  });
  res.header({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
  });
  res.json(PlayerList);
});


// Gets all the Player
router.get("/getplayers", async (req, res) => {
  const playerData = await Player.findAll({
     include: [
      {
        model: Team,
        as: "team",
      },
    ],
    //order condition
    // order: [["TimeStamp", "DESC"]],
  });
  res.header({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
  });
  res.json(playerData);
});

// Updates Product
router.put("/updateplayer/:id", async (req, res) => {
  const PlayerID = req.params.id;
  const bodyData = req.body;
  const playerData = await Player.update(
    bodyData,
    {
      where: {
        id: PlayerID,
      },
    }
  );
  res.header({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
  });
  res.json(playerData);
});

// Updates Category
router.put("/updateteam/:id", async (req, res) => {
  const TeamID = req.params.id;
  const bodyData = req.body;
  const teamData = await Team.update(
    bodyData,
    {
      where: {
        id: TeamID,
      },
    }
  );
  res.header({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
  });
  res.json(teamData);
});
// Updates SubCategory
router.put("/updateuser/:id", async (req, res) => {
  const UserID = req.params.id;
  const bodyData = req.body;
  const userData = await User.update(
    bodyData,
    {
      where: {
        id: UserID,
      },
    }
  );
  res.header({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
  });
  res.json(userData);
});

// Delete the Player by id
router.delete("/deleteplayer/:id", async (req, res) => {
  const PlayerID = req.params.id;
  // console.log(contactID);
  const playerData = await Player.destroy({
    where: {
      id: PlayerID
    },
  });
  res.header({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
  });
  res.json(playerData);
});

// Delete the Team by id
router.delete("/deleteteam/:id", async (req, res) => {
  const TeamID = req.params.id;
  // console.log(contactID);
  const TeamData = await Team.destroy({
    where: {
      id: TeamID
    },
  });
  res.header({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
  });
  res.json(TeamData);
});

// Delete the Product by id
router.delete("/deleteuser/:id", async (req, res) => {
  const UserID = req.params.id;
  // console.log(contactID);
  const UserData = await User.destroy({
    where: {
      id: UserID
    },
  });
  res.header({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
  });
  res.json(UserData);
});





module.exports = router;
