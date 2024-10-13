
const connection=require('../config/database');
const getAllUser=require('../services/CRUDService');

const getHomePage=(req,res)=>{
    res.send('Hello World abc a teasd st a asf asdaasfssdfsdfsdfdf! sgfsdg  adgdaggad sgd');
}


const getKaynePage=(req,res)=>{
    res.render('test.ejs');
}

const getCreateUser=(req,res)=>{
    res.render('CreateUser');
}
const postCreateUser=async(req,res)=>{
    let username=req.body.username;
    let password=req.body.password;
    let email=req.body.email;
    let fname=req.body.fname;
    let phone=req.body.phone;
    let type=req.body.type;

   let[result,fields]= await connection.query(`insert into admininfo(username,password,email,fname,phone,type) values(?,?,?,?,?,?)`,[username,password,email,fname,phone,type],
       
   )
  

    res.redirect('/CreateUser');
}




const  getListUser  = async(req,res)=>{
    
    let result=await getAllUser();
    
    res.render('ListUser',{ListUser:result});
   

    
}

const getUpdateUser=async(req,res)=>{
    const username=req.params.username;
    
    let [results,fields]= await connection.query(`select * from admininfo where username=?`,[username]);
   

    let checkuser=results&&results.length >0 ? results[0]:{};
  
    res.render('EditUser',{checkuser:checkuser});
}


const postUpdateUser=async(req,res)=>{
    let username=req.body.username;
    let password=req.body.password;
    let email=req.body.email;
    let fname=req.body.fname;
    let phone=req.body.phone;
    let type=req.body.type;

    let [result,fields]=await connection.query(`update admininfo set username=?,password=?,email=?,fname=?,phone=?,type=? Where username=?`,[username,password,email,fname,phone,type,username]);

    
    res.redirect('ListUser');

}

const getDeleteUser=(req,res)=>{
    let username=req.params.username;
    console.log(username);

    res.render('DeleteUser',{username:username});
}

const postDeleteUser=async(req,res)=>{

    let username=req.body.username;

    let[result,fields]=await connection.query(`delete from admininfo where username=?`,[username]);
    console.log(result);
    res.redirect('ListUser');

}

module.exports={getHomePage,getKaynePage,getCreateUser,postCreateUser,getListUser,getUpdateUser,postUpdateUser,getDeleteUser,postDeleteUser};