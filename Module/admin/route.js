const { Router } = require('express');
const controller = require('./controller');




const router = Router({ mergeParams: true });

router.post('/about', validation, controller);




module.exports = router;