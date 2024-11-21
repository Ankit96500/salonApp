
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/database.js";
import { join } from "path";

//----
dotenv.config()
const app = express();

const PORT = process.env.PORT || 8000

app.get('/',(req,res)=>{
  res.redirect('/client/account/login.html')
})


// middelware setup
app.use(express.static(join(process.cwd(),"public")));
app.use(bodyParser.json());
app.use(cors());

// loads routes
// import adminRoutes from "./routes/adminR.js";
// import chatRoutes from "./routes/chatR.js";

// app.use("/admin",adminRoutes);
// app.use("/chat",chatRoutes);

// // import models:
import User from "./models/userM.js";
import Service from "./models/servicesM.js";
import bUser from "./models/businessUserM.js";
import Appointement from "./models/appointmentM.js";
import review from "./models/reviewM.js";

// USER <---> GROUP
// User.hasMany(Group,{foreignKey:"UserID",as:"grouptb",onDelete:"CASCADE"})
// Group.belongsTo(User,{foreignKey:"UserID" ,as:"usertb"})

// SERVICES <---> APPOINTEMENT
Service.hasMany(Appointement,{foreignKey:"service_ID",as:"appointtb",onDelete:"CASCADE"});
Appointement.belongsTo(Service,{foreignKey:"service_ID",as:"servicetb"});

// SERVICES  <----> REVIEW 
Service.has 




// port listening
// sequelize
// .sync()
// // Chat.sync({force:true})
// // .sync({alter:true})
// .then(()=>{
//   console.log(`connected db at PORT: ${PORT}`);
// })
// .catch((error)=>{
//   console.log(error);
// });
app.listen(PORT);








