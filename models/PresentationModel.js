const mongoose = require('mongoose')

const PresentationModel = mongoose.Schema({
    presentationName : {
        type : String,
        required : true
    },
    researcherId : {
        type : String,
        required : true
    },
    dateTime : {
        type : String,
        required : true,
    },
    
    meetingLink : {
        type : String,
        required : false,
    },
    
    researchPaperId : {
        type : String,
        required : true,
    },
    researchPaperName : {
        type : String,
        required : true,
    },
    presentationLink : {
        type : String,
        required : false,
    },
    presentationSlidesUrl : {
        type : String,
        required : true,
    },
    status : {
        type : String,
        required : true,
    },
    
})

module.exports = mongoose.model('Presentations',PresentationModel);