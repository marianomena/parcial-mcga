const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Producto = new Schema ({
	nombre_producto:{
		type: String,
		required: true,
	},
	tipo_producto:{
		type: String,
	},
	stock_kg:{
		type: Number,
	}});
	
	const producto = mongoose.model("Producto", Producto);
	module.exports = producto;
