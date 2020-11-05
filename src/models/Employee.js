const {Schema,model} = require('mongoose');

const employeeSchema = new Schema({
    name:{type:String,required:true},
    position:{type:String,required:true},
    office:{type:String,required:true},
    salary:{type:Number,required:true}
},
{
    timestamps:true, // añade fecha de creacion y actualizacion por ultima véz
    versionKey:false // Para cuando creamos un objeto que no añada el campo __V
}
)

module.exports = model('Employee',employeeSchema);