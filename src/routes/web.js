const express = require('express');
const router = express.Router();
const {getHomePage,getKaynePage,getCreateUser,postCreateUser,getListUser,getUpdateUser,postUpdateUser,getDeleteUser,postDeleteUser}=require('../controllers/homeController');


router.get('/', getHomePage);

router.get('/kayne',getKaynePage );

router.get('/CreateUser',getCreateUser);

router.post('/CreateUser',postCreateUser);
router.get('/ListUser',getListUser);

router.get('/UpdateUser/:username',getUpdateUser);

router.post('/UpdateUser',postUpdateUser);


router.get('/DeleteUser/:username',getDeleteUser);

router.post('/DeleteUser',postDeleteUser);


module.exports=router;

