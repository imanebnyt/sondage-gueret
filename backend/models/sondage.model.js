const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sondageSchema = new Schema({
    idSondage : { type: mongoose.Schema.Types.ObjectId, ref: 'Sondage', required: true },
    nom : {type:String, required: true},
    prenom : {type:String, required: true},
    date: {type: Date, default:Date.now, required: true},
    numero: {type: Number, required: true},
    adresse: {type:String, required: true},
    ville: {type:String, enum:[
        "Ajain",
        "Anzême",
        "Bussière-Dunoise",
        "Gartempe",
        "Glénic", 
        "Guéret",
        "Jouillat",
        "La Brionne",
        "La Chapelle-Taillefert",
        "La Saunière",
        "Mazeirat",
        "Montaigut-le-blanc",
        "Peyrabout",
        "Saint-Christophe",
        "Saint-Eloi",
        "Saint-Fiel",
        "Sainte-Feyre",
        "Saint-Laurent",
        "Saint-Léger-le-Guérétois",
        "Saint-Silvain-Montaigut",
        "Saint-Sulpice-le-Guéretois",
        "Saint-Vaury",
        "Saint-Victor-en-Marche",
        "Saint-Yrieix-les-Bois",
        "Savennes"
    ], required:true},
    nbFoyer : {type:Number, enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], required: true},
    nbEnfants : {type:Number, enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], required: true},
    nbAdultes : {type:Number, enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], required: true},
    selectedOption : { type: mongoose.Schema.Types.ObjectId, ref: 'Aliments', required: true }
});

const Sondage = mongoose.model('Sondage', sondageSchema);

module.exports = Sondage;