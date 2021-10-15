const express = require("express");
const router = express.Router();
const Proveedor = require("../../Models/proveedor");

router.get ("/", async (req,res) =>{
	try{
		const proveedor = await Proveedor.find();
		res.json(proveedor);
	} catch {
		res.json({message: error})
	}
	
})

router.get("/:_id" , async(req,res) =>{
	try{
		const proveedor = await Proveedor.findById(req.params._id);
		res.json(proveedor);
	} catch (error){
		res.json({message: "no existe proveedor"})
	}
});

router.post("/", async(req,res) =>{
	const proveedor = new Proveedor({
    nombre_proveedor: req.body.nombre_proveedor,
	tipo_proveedor: req.body.tipo_proveedor,
	email_proveedor: req.body.email_proveedor,
    telefono_proveedor: req.body.telefono_proveedor,
    ciudad_proveedor: req.body.ciudad_proveedor,
    codigo_postal: req.body.codigo_postal
	});
	try{
		const saveProveedor = await proveedor.save();
		res.json(saveProveedor);
	} catch (error){
		res.json({message:"error"})
	}
})

router.put("/:_id", async(req, res) => {
	let id = req.params._id
	let update = req.body
	
	Proveedor.findByIdAndUpdate(id, update, (err, proveedorUpdate) => {
		if(err){
			res.status(500).send({message: "error"})
		}
		res.status(200).send({proveedor: proveedorUpdate})
	})
})




router.delete("/:_id", async (req,res) =>{
	try{
		const removeProveedor = await Proveedor.remove({_id: req.params._id});
		res.json({message: "proveedor eliminado"})		
	} catch (error){
		res.json({message : "no se pudo eliminar"})
	}
})

module.exports = router;