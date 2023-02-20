const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const alimentsSchema = new Schema({
    alim_code: {type:Number, required:true},
    alim_nom_fr: {type:String, required:true},
    alim_nom_sci: {type:String, required: true},
    alim_grp_code: {type:Number, required: true},
    alim_grp_nom_fr: {type:String, required:true},
    alim_ssgrp_code: {type: Number, required:true},
    alim_ssgrp_nom_fr: {type:String, required:true},
    alim_ssssgrp_code: {type:Number, required:true},
    alim_ssssgrp_nom_fr: {type:Number, required:true}
})

const Aliments = mongoose.model('Aliments', alimentsSchema);

module.exports = Aliments;