const express = require('express');
const router2 = express.Router();
const recordingService = require('./recording.service');

// routes
router2.post('/create', create);
router2.get('/:created_by', getAll);
router2.delete('/:id', _delete);

module.exports = router2;

function create(req, res, next) {
    recordingService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    recordingService.getAll(req.params.created_by)
        .then(recording => recording ? res.json(recording) : res.sendStatus(404))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    recordingService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}