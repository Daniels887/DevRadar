const { Router } = require('express');

const routes = Router();

routes.post('/users', (req, res) => {
    console.log(request.body);
    return res.json({ message: 'Hello Omnistack' });
})

module.exports = routes;