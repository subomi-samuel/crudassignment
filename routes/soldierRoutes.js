const express = require('express');
const soldierRouter = express.Router();
const soldierController = require('../controllers/soldierControllers');


soldierRouter.get('/soldiers', soldierController.fetchSoldiers);
soldierRouter.get('/soldier/:id', soldierController.fetchSoldier);
soldierRouter.post('/soldier', soldierController.createNewSoldier);
soldierRouter.put('/soldier/:id', soldierController.updateSoldier);
soldierRouter.delete('/soldier/:id', soldierController.deleteSoldier);

module.exports = soldierRouter;