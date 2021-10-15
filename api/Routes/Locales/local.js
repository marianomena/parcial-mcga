const express = require("express");
const router = express.Router();
const Local = require("../../Models/local");

router.get ("/", async (req,res) =>{
	try{
		const local = await Local.find();
		res.json(local);
	} catch {
		res.json({message: error})
	}
	
})

router.get("/:_id" , async(req,res) =>{
	try{
		const local = await Local.findById(req.params._id);
		res.json(local);
	} catch (error){
		res.json({message: "no existe local"})
	}
});

router.post("/", async(req,res) =>{
	
	const local = new Local({
	ubicacion_local: req.body.ubicacion_local,
	administrador_local: req.body.administrador_local,
	ciudad_local: req.body.ciudad_local,
	telefono_local: req.body.telefono_local	
	});
	try{
		const saveLocal = await local.save();
		res.json(saveLocal);
	} catch (error){
		res.json({message:"error"})
	}
})

router.put("/:_id", async(req, res) => {
	
	let id = req.params._id
	let update = req.body
	
	Local.findByIdAndUpdate(id, update, (err, localUpdate) => {
		if(err){
			res.status(500).send({message: "error"})
		}
		res.status(200).send({local: localUpdate})
	})
})




router.delete("/:_id", async (req,res) =>{
	try{
		const removeLocal = await Local.remove({_id: req.params._id});
		res.json({message: "local eliminado"})		
	} catch (error){
		res.json({message : "no se pudo eliminar"})
	}
})

module.exports = router;