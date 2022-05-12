const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
} = require('../controllers/thought-controller');


router
    .route('/')
    .get(getAllThought)
    .post(createThought);



// Set up GET one, PUT, and DELETE at /api/thoughts/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// router
//     .route('/:thoughtId/friends/:friendId')
//     .post(addFriend)
//     .delete(deleteFriend);


module.exports = router;