const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const alimentsSchema = new Schema({
    alim_code: {type:Number, required:true},
    alim_nom_fr: {type:String, required:true},
})

const Aliments = mongoose.model('Aliments', alimentsSchema);

module.exports = Aliments;