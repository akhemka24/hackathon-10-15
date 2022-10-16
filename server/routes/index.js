const express = require('express');
const router = express.Router();

/** Require controller modules */
const client_controller = require('../controllers/clientController.js');
const response_controller = require('../controllers/responseController.js');

/// Client ROUTES ///

/** POST request to create an Client*/
router.post('/client/create', client_controller.client_create_post);

/** GET request to delete an Client*/
router.get('/client/:id/delete', client_controller.client_delete_get);

/** POST request to delete an Client*/
router.post('/client/:id/delete', client_controller.client_delete_post);

/** GET request to update an Client*/
router.get('/client/:id/update', client_controller.client_update_get);

/** POST request to update an Client*/
router.post('/client/:id/update', client_controller.client_update_post);

/** GET request for one particular Client*/
router.get('/client/:id', client_controller.client_detail);

/** GET request for a list of all Clients*/
router.get('/client', client_controller.client_list);

module.exports = router;