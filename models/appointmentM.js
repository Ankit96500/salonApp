
import { DataTypes,Model} from "sequelize";
import sequelize from "../config/database.js";
import User from "./userM.js";
import Services from "./servicesM.js";

class Appointement extends Model{
}
Appointement.init({
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
        username:DataTypes.STRING,
        status:{
            type:DataTypes.BOOLEAN,
            defaultValue:false,
        },
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

export default Appointement;


