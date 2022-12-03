const{Student} = require('../models/student');
const express = require('express');
const router = express.Router();
const authorize = require('../middlewares/authorize');
const admin = require('../middlewares/admin');


const studentList = async(req,res)=>{
   
    const students =await Student.find()
    .sort({name:1})
    res.send(students);

}


const newStudent = async(req,res)=>{
    const student = new Student(req.body);
    try{
        const result =await student.save();
        res.send(result);
    }catch(err){
        const errMsgs = [];
        for(field in err.errors){
            errMsgs.push(err.errors[field].message);
        }
        return res.status(400).send(errMsgs);
    }

}
const studentDetail = async(req,res)=>{
    const id = req.params.id;
    try{
        const student = await Student.findById(id);
    if(!student) return res.status(404).send('id not fount')
    res.send(student);

    }catch(err){
        return res.status(404).send('id not fount')
    }
    

}
const studentUpdate = async(req,res)=>{
    const id = req.params.id;
    const updateData = req.body;
    try{
        const student = await Student.findByIdAndUpdate(id,updateData,{new:true});
        if(!student) return res.status(404).send('id not fount')
        res.send(student);
    }catch(err){
        return res.status(404).send('id not fount')
    }

}
const studentDelete = async(req,res)=>{
    const id = req.params.id;
    try{
        const student = await Student.findByIdAndDelete(id);
        if(!student) return res.status(404).send('id not fount');
        res.send(student);
    }catch(err){
        return res.status(404).send('id not fount');

    }

}






router.route('/')
.get(authorize, studentList)
.post(newStudent)

router.route('/:id')
.get(studentDetail)

.put(studentUpdate)
.delete([authorize,admin],studentDelete)

module.exports = router;