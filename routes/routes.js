const express=require('express')
const router=express.Router()
const empdata=require('../db/schema')
router.use(express.json())
router.use(express.urlencoded({extended:true}))

//get

router.get('/get',async(req,res)=>{
    try {
        const employees = await empdata.find(); // Fetch all employee data from MongoDB
        res.render("home", { employees }); // Render the home template with employee data
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
   
   
   
   
    // try {

        // res.render("home")
    //     const data=await empdata.find();
    // res.status(200).send(data)
  //
    })



//post
    router.post('/post/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body; // Get updated data from the request body
        await empdata.findByIdAndUpdate(id, updatedData); // Update the employee in the database
        res.redirect('/get'); // Redirect to the employee list after successful update
    } catch (error) {
        console.error(error);
        res.status(500).send('Update error');
    }
});
    
    
    
    // try {
    //     const data=req.body
    //     const data1=new empdata(data);
    //     const savedata=await data1.save();
    //     res.status(200).send('post successfull')
    
        
    // } catch (error) {
    //     console.log(error)
    // }
    
    // })


    router.put('/put/:id',async(req,res)=>{
        try {
            const id=req.params.id
            const data=req.body
            const newdata=await empdata.findByIdAndUpdate(id,data)
            res.status(200).send("updated successfully")
        } catch (error) {
            res.status(404).send('update error')
            
        }
    })


    //delete
router.delete('/delete/:id',async(req,res)=>{
    try {
        const id=req.params.id
        const newdata=await empdata.findByIdAndDelete(id)
        res.status(200).send("deleted successfully")
    } catch (error) {
        res.status(404).send('delete error')
        
    }
})

    






module.exports=router