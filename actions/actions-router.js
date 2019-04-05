const router = require('express').Router();
const Actions = require('./actions-model.js');


router.post('/', async (req, res) => {
    try {
        
        const action = await Actions.add(req.body);
        res.status(201).json(action);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/', async (req, res) => {
    try {
        
        const actions = await Actions.find();
        res.status(200).json(actions);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        
        const action = await Actions.findById(req.params.id);
        res.status(200).json(action);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.put('/:id', async (req, res) => {
    try {
        
        const action = await Actions.update(req.params.id, req.body);
        res.status(200).json(action);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        
        const action = await Actions.remove(req.params.id);
        res.status(200).json(action);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;