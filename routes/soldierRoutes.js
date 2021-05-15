const express = require('express');
const soldierRouter = express.Router();
const soldierController = require('../controllers/soldierControllers');


soldierRouter.get('/soldiers', soldierController.fetchSoldiers);
soldierRouter.get('/soldiers/:id', soldierController.fetchSoldier);
soldierRouter.post('/soldiers', soldierController.createNewSoldier);
soldierRouter.put('/soldiers/:id', soldierController.updateSoldier);
soldierRouter.delete('/soldiers/:id', soldierController.deleteSoldier);

module.exports = soldierRouter;