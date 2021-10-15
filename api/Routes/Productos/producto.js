const express = require("express");
const router = express.Router();
const Producto = require("../../Models/producto");

router.get ("/", async (req,res) =>{
	try{
		const producto = await Producto.find();
		res.json(producto);
	} catch {
		res.json({message: error})
	}
	
})

router.get("/:_id" , async(req,res) =>{
	try{
		const producto = await Producto.findById(req.params._id);
		res.json(producto);
	} catch (error){
		res.json({message: "no existe producto"})
	}
});

router.post("/", async(req,res) =>{
	
	const producto = new Producto({
	nombre_producto: req.body.nombre_producto,
	tipo_producto: req.body.tipo_producto,
	stock_kg: req.body.stock_kg	
	});
	try{
		const saveProducto = await producto.save();
		res.json(saveProducto);
	} catch (error){
		res.json({message:"error"})
	}
})

router.put("/:_id", async(req, res) => {
	
	let id = req.params._id
	let update = req.body
	
	Producto.findByIdAndUpdate(id, update, (err, productoUpdate) => {
		if(err){
			res.status(500).send({message: "error"})
		}
		res.status(200).send({producto: productoUpdate})
	})
})




router.delete("/:_id", async (req,res) =>{
	try{
		const removeProducto = await Producto.remove({_id: req.params._id});
		res.json({message: "producto eliminado"})		
	} catch (error){
		res.json({message : "no se pudo eliminar"})
	}
})

module.exports = router;