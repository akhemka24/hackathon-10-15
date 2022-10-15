const express = require('express');
const router = express.Router();

/** Require controller modules */
const event_controller = require('../controllers/eventController.js');
const organization_controller = require('../controllers/organizationController.js');
const user_controller = require('../controllers/userController.js');

/// EVENT ROUTES ///

/** GET request to create an Event */
router.get('/client/create', event_controller.event_create_get);

/** POST request to create an Event */
router.post('/client/create', event_controller.event_create_post);

/** GET request to delete an Event */
router.get('/client/:id/delete', event_controller.event_delete_get);

/** POST request to delete an Event */
router.post('/client/:id/delete', event_controller.event_delete_post);

/** GET request to update an Event */
router.get('/client/:id/update', event_controller.event_update_get);

/** POST request to update an Event */
router.post('/client/:id/update', event_controller.event_update_post);

/** GET request for one particular Event */
router.get('/client/:id', event_controller.event_detail);

/** GET request for a list of all Events */
router.get('/client', event_controller.event_list);

/// ORGANIZATION ROUTES ///

/** GET request to create an Organization */
router.get('/response/create', organization_controller.organization_create_get);

/** POST request to create an Organization */
router.post('/response/create', organization_controller.organization_create_post);

/** GET request to delete an Organization */
router.get('/response/:id/delete', organization_controller.organization_delete_get);

/** POST request to delete an Organization */
router.post('/response/:id/delete', organization_controller.organization_delete_post);

/** GET request to update an Organization */
router.get('/response/:id/update', organization_controller.organization_update_get);

/** POST request to update an Organization */
router.post('/response/:id/update', organization_controller.organization_update_post);

/** GET request for one particular Organization */
router.get('/response/:id', organization_controller.organization_detail);

/** GET request for a list of all Organizations */
router.get('/response', organization_controller.organization_list);

module.exports = router;