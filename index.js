const express = require("express");
const app = express();
const cors = require("cors");
const fs = require('fs');
// const session = require("express-session");
// const store = new session.MemoryStore();
const PORT = 5000;

// const https = require('https');

// const options = {
//   key: fs.readFileSync('./ec2.key'),
//   cert: fs.readFileSync('./ec2.crt')
// };

// https.createServer(options, app).listen(PORT);

// app.use(session({
//   secret:"some secret",
//   cookie: {maxAge: 60000},
//   saveUninitialized: false,
//   store
// }))

app.use(express.json());
app.use(cors({
  credentials: true,
  origin: function(origin, callback){
    return callback(null, true);
  }
}));

const db = require("./models");

//Foreign Keys

// //One to Many
db.Team.hasMany(db.Player, { foreignKey: 'TeamID', as: 'player' });
db.Player.belongsTo(db.Team, { foreignKey: 'TeamID', as: 'team' });

// db.Categories.hasMany(db.Products, { foreignKey: 'CategoryID', as: 'product' });
// db.Products.belongsTo(db.Categories, { foreignKey: 'CategoryID', as: 'category' });

// db.SubCategories.hasMany(db.Products, { foreignKey: 'SubCategoryID', as: 'product' });
// db.Products.belongsTo(db.SubCategories, { foreignKey: 'SubCategoryID', as: 'subcategory' });

// db.User.hasMany(db.Status, { foreignKey: 'UserId', as: 'statuses' });
// db.Status.belongsTo(db.User, { foreignKey: 'UserId', as: 'user' });

// db.HelpType.hasMany(db.Case, { foreignKey: 'HelpTypeId', as: 'cases' });
// db.Case.belongsTo(db.HelpType, { foreignKey: 'HelpTypeId', as: 'helptype' });

// db.ChatSession.hasMany(db.ChatLog, { foreignKey: 'SessionId', as: 'chatlogs' });
// db.ChatLog.belongsTo(db.ChatSession, { foreignKey: 'SessionId', as: 'chatsession' });

// db.User.hasMany(db.ChatSession, {foreignKey: 'UserId', as: 'chatsessions'});
// db.ChatSession.belongsTo(db.User, {foreignKey: 'UserId', as: 'user' });

// db.enterpriseTable.hasMany(db.User, {foreignKey: 'EnterpriseId', as: 'users'});
// db.User.belongsTo(db.enterpriseTable, {foreignKey: 'EnterpriseId', as: 'enterprise' });

// //One To One

// db.Case.hasOne(db.ChatSession, { foreignKey: 'CaseId', as: 'session' });
// db.ChatSession.belongsTo(db.Case, { foreignKey: 'CaseId', as: 'case' });

// db.enterpriseTable.hasOne(db.User, { foreignKey: 'UserId', as: 'user' });
// db.User.belongsTo(db.enterpriseTable, { foreignKey: 'UserId', as: 'enterprise' });

// Routers
const API = require("./routes/api");
app.use("/api", API);


db.sequelize.sync().then(() => {
  // https.createServer(options, app).listen(PORT);
  app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
  });
});

// Run All Crons
const runCrons = require("./crons");
runCrons();
