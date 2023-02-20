const express = require('express');
const router = express.Router();
const Aliments = require('../models/Aliments');

router.get('/aliments', async (req, res) => {
  try {
    const data = await Aliments.find().select('alim_nom_fr');
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).send('Erreur de Serveur');
  }
});

module.exports = router;
