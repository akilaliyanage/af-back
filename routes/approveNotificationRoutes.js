const express = require('express')
const router = express.Router()

const ApproveNotification = require('../models/ApproveNotification')

router.get('/:id',async (req,res) =>{
    if(req.params && req.params.id){
        await ApproveNotification.findById(req.params.id)
        .then((data) => {
            res.status(200).send({data: data})
        })
        .catch((err) => {
            res.status(500).send({error: err.message})
        });
    }
})
router.get('/r-papers/:id',async (req,res) =>{
        await ApproveNotification.find({ $and: [ { userId: req.params.id }, { Status:  'Approved' } , { type:  'Research-Paper' }] })
        .then((data) => {
            res.status(200).send({data: data})
        })
        .catch((err) => {
            res.status(500).send({error: err.message})
        });
})

router.get('/presentations/:id',async (req,res) =>{
        await ApproveNotification.find({ $and: [ { userId: req.params.id }, { Status:  'Approved' } , { type:  'Presentation' }] })
        .then((data) => {
            res.status(200).send({data: data})
        })
        .catch((err) => {
            res.status(500).send({error: err.message})
        });
})

router.delete('/delete/:id',(req,res) =>{
    const id = req.params.id;
    console.log(id);

    ApproveNotification.findByIdAndDelete(id, function(err){
        if(err){
            res.status(500).send({"message" : "error"})
        }

        res.status(201).send({"message" : "deleted"})
    })
})

router.get('/byResearcher/:id',async (req,res) =>{
    if(req.params && req.params.id){
        await researchPaper.find({ researcherId: req.params.id } )
        .then((data) => {
            res.status(200).send({data: data})
        })
        .catch((err) => {
            res.status(500).send({error: err.message})
        });
    }
})
module.exports = router;