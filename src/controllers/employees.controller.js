const employeeCtrl ={}

const Employee = require('../models/Employee');

employeeCtrl.getEmployees = async(req,res)=>{
    const employees = await Employee.find();
    res.status(200).json({
        ok:true,
        employees
    })
}



employeeCtrl.createEmployee = async(req,res)=>{
    try{
        const {name,position,office,salary} = req.body;
        const newEmployee = new Employee({name,position,office,salary});
        await newEmployee.save();
        res.status(200).json({
            ok:true,
            message: "Employee created",
        })
    }catch(err){
        console.log(err);
        res.status(500).json(err500)
    }
}
employeeCtrl.getEmployee = async (req,res)=>{
    try{
        const {id}=req.params;
        const employeeDb= await Employee.findById(id);
        res.status(200).json({
            ok:true,
            employee:employeeDb
        })

    }catch(err){
        console.log(err);
        res.status(500).json(err500)
    }
}

employeeCtrl.editEmployee = async (req,res)=>{
    try{
        const {id}=req.params;
        const employeeUpdated = await Employee.findByIdAndUpdate(id,req.body)

        if(!employeeUpdated){
            return res.status(400).json({
                ok:true,
                message:"Employee does´n exist"
            })
        }
        res.status(200).json({
            ok:true,
            message:"Employee was updated"
        })
    }catch(err){
        console.log(err);
        res.status(500).json(err500);
    }
}

employeeCtrl.deleteEmployee = async(req,res)=>{
    try{
        const {id}= req.params;
        const employeeDeleted = await Employee.findByIdAndDelete(id);
        console.log(employeeDeleted);
        if(!employeeDeleted){
            return res.status(400).json({
                ok:true,
                message:"Employee does´n exist"
            })
        }

        res.status(200).json({
            ok:true,
            message:"Employee was deleted"
        })

    }catch(err){
        console.log(err);
        res.status(500).json(err500)
    }


}

const err500 ={
    ok:false,
    message:"Ocurrió un problema"
}

module.exports= employeeCtrl;