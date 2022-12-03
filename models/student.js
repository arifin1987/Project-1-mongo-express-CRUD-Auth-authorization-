const {Schema, model} = require('mongoose');




const studentSchema = Schema({
    name:{type: String, required:true},
    age: {type: Number, min:0},
    hobbies:{type: Array,
            of:String,
            validate:{
                validator: (value)=>value.length > 0,
                message: 'There must be at least one hobby'
            }

}
});


const Student = model('Student', studentSchema);

exports.Student = Student;