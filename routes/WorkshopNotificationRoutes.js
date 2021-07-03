const express = require('express');
const router = express.Router()

//importing models
const Notification = require('../models/ApproveNotification')

//create a notification
router.post('/create',async(req,res) => {

    const notification = new Notification({
        type: req.body.type,
        itemId:req.body.itemId,
        userId: req.body.userID,
        Status: req.body.status
    });
    // console.log(notification)
    notification.save().then(() => {
        res.json({status:200})
    }).catch((err) =>{
        console.log(err);
    })

})

//retrive notifications to relevant user
router.get('/myNoti/:id',async (req,res) =>{
    const id = req.params.id;
    try{
        const data = await Notification.find()
        const array = [];
        data.forEach(item => {
            item.userId == id && item.type == 'workshop' ? array.push(item) : array.push()
        });
        res.json(array)
    }catch(err){
        res.json({message : err})
    }
    
})

module.exports = router;