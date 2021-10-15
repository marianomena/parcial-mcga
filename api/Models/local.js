const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Local = new Schema ({
	ubicacion_local:{
		type: String,
		required: true,
	},
	administrador_local:{
		type: String,
	},
	ciudad_local:{
		type: String,
	},
	telefono_local:{
	type: String,
	}
	});
	
	const local = mongoose.model("Local", Local);
	module.exports = local;
