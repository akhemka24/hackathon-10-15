const express = require('express');
const router = express.Router();

/** Require controller modules */
const client_controller = require('../controllers/clientController.js');

/// Client ROUTES ///

/** POST request to create an Client*/
router.post('/create', client_controller.client_create_post);

/** GET request to delete an Client*/
router.get('/:id/delete', client_controller.client_delete_get);

/** POST request to delete an Client*/
router.post('/:id/delete', client_controller.client_delete_post);

/** GET request to update an Client*/
router.get('/:id/update', client_controller.client_update_get);

/** POST request to update an Client*/
router.post('/:id/update', client_controller.client_update_post);

/** GET request for one particular Client*/
router.get('/:id', client_controller.client_detail);

/** GET request for a list of all Clients*/
router.get('/', client_controller.client_list);

module.exports = router;