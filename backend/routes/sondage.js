const express = require('express');
const router = express.Router();
const Sondage = require('../models/sondage');

// Route pour créer un nouveau sondage
router.post('/sondages', (req, res) => {
    const nom = req.body.nom;
    const prenom = req.body.prenom;
    const date = Date.parse(req.body.date);
    const numero = Number(req.body.numero);
    const adresse = req.body.adresse;
    const ville = req.body.ville;
    const nbFoyer = Number(req.body.nbFoyer);
    const nbEnfants = Number(req.body.nbEnfants);
    const nbAdultes = Number(req.body.nbAdultes);
    // ADD ALIMENTS

    const sondage = new Sondage({
        nom, 
        prenom,
        date,
        numero,
        adresse,
        ville,
        nbFoyer,
        nbEnfants,
        nbAdultes
    });
    
  sondage.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err
      });
    }
    res.json({
      message: 'Sondage créé avec succès'
    });
  });
});

// Route pour récupérer tous les sondages
router.get('/sondages', (req, res) => {
  Sondage.find((err, sondages) => {
    if (err) {
      return res.status(400).json({
        error: err
      });
    }
    res.json(sondages);
  });
});

// Route pour récupérer un sondage par son ID
router.get('/sondages/:id', (req, res) => {
  const id = req.params.id;
  Sondage.findById(id, (err, sondage) => {
    if (err) {
      return res.status(400).json({
        error: err
      });
    }
    if (!sondage) {
      return res.status(404).json({
        error: 'Sondage non trouvé'
      });
    }
    res.json(sondage);
  });
});

// Route pour mettre à jour un sondage par son ID
router.put('/sondages/:id', (req, res) => {
  const id = req.params.id;
  Sondage.findByIdAndUpdate(id, req.body, {
    new: true
  }, (err, sondage) => {
    if (err) {
      return res.status(400).json({
        error: err
      });
    }
    if (!sondage) {
      return res.status(404).json({
        error: 'Sondage non trouvé'
      });
    }
    res.json({
      message: 'Sondage mis à jour avec succès'
    });
  });
});

// Route pour supprimer un sondage par son ID
router.delete('/sondages/:id', (req, res) => {
  const id = req.params.id;
  Sondage.findByIdAndDelete(id, (err, sondage) => {
    if (err) {
      return res.status(400).json({
        error: err
      });
    }
    if (!sondage) {
      return res.status(404).json({
        error: 'Sondage non trouvé'
      });
    }
    res.json({
      message: 'Sondage supprimé avec succès'
    });
  });
});

module.exports = router;
