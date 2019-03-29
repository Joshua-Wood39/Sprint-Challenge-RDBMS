const router = require('express').Router();
const Projects = require('./projects-model.js');

router.get('/:id', async (req, res) => {
    try {
        const project = await Projects.findById(req.params.id);
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.post('/', async (req, res) => {
    try {
        
        const project = await Projects.add(req.body);
        res.status(201).json(project);
    } catch (error) {
        res.status(500).json(error);
    }
});


module.exports = router;