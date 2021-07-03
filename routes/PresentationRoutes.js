const router = require('express').Router();
const config = require('../secret.json')

const PresentationModel = require('../models/PresentationModel')

router.post('/', async (req,res) =>{
     console.log('presentation Post called');
    const presentation = new PresentationModel({

            Approved: false,
            
            presentationName : req.body.presentationName,
            researcherId : req.body.researcherId, 
            dateTime : req.body.presentationDatetime, 
            meetingLink : req.body.meetingLink, 
            researchPaperId : req.body.researchPaperId, 
            researchPaperName : req.body.researchPaperName, 
            presentationLink : req.body.presentationLink, 
            presentationSlidesUrl : req.body.presentationSlidesUrl, 
            status : 'pending'
    })

    
     presentation.save().then(data =>{
        console.log('Successfully saved')
        res.status(200).send({data: data})
    }).catch(err =>{
        console.log(err)
        res.status(500).send({error: err.message})
    })
})

module.exports = router;