const connection=require('../config/database');

const getAllUser=async()=>{

    const[result,fields]=await connection.query('select * from admininfo');

    return result;

}
module.exports=getAllUser;