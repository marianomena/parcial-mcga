const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Proveedor = new Schema ({
	nombre_proveedor: {
        type: String,
        trim : true
    },
    tipo_proveedor : {
        type: String,
        trim : true
    },
    email_proveedor : {
        type: String,
        trim: true
    },
    telefono_proveedor : {
        type: String,
        trim: true
    },
    ciudad_proveedor : {
        type: String,
        trim: true
    }
    
	});
	
	const proveedor = mongoose.model("Proveedor", Proveedor);
	module.exports = proveedor;
