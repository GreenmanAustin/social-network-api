const router = require('express').Router();
const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    deleteAllUser,
    addFriend,
    deleteFriend
} = require('../controllers/user-controller');


router
    .route('/all')
    .delete(deleteAllUser);
// Set up GET all and POST at /api/users
router
    .route('/')
    .get(getAllUser)
    .post(createUser);



// Set up GET one, PUT, and DELETE at /api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);


module.exports = router;