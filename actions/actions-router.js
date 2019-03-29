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


module.exports = router;