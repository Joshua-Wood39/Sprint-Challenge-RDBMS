const express = require('express');
const helmet = require('helmet');
const projectRouter = require('../projects/projects-router.js');
const actionsRouter = require('../actions/actions-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/projects', projectRouter);
server.use('/api/actions', actionsRouter);


module.exports = server;