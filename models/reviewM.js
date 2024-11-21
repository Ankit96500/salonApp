
import { DataTypes,Model} from "sequelize";
import sequelize from "../config/database.js";
import User from "./userM.js";
import Services from "./servicesM.js";

class Review extends Model{
}
Review.init({
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            autoIncrement:true,
            primaryKey:true
        },  
        service_ID:{
            type:DataTypes.INTEGER,
            references:{
                model:Services,
                key:"id"
            }
        },
        customer:DataTypes.STRING,
        user_ID:{
            type:DataTypes.INTEGER,
            references:{
                model:User,
                key:"id"
            }
        }


    },{
        sequelize,
        freezeTableName:true
    }
)

export default Review;


