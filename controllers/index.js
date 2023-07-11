const {  login } = require('./auth/loginController');
const {  logout } = require('./auth/logoutControler');
const { signup } = require('./auth/signupController');
const { getCurrent, changeUserSubscription } = require('./users/usersControllers');
const { listContacts} = require('./contacts/listContacts');
const { getContactById } = require('./contacts/getContact');
const { removeContact } = require('./contacts/removeContact');
const {  addContact} = require('./contacts/addContact');
const { updateStatusContact } = require('./contacts/updateStatusContact');
const { updateContact } = require('./contacts/updateContact');
const { changeAvatarImg } = require('./users/changeAvatarImg');
const { verificationEmail } = require('./auth/verificationEmail');
const {reVerificationEmail} = require('../controllers/users/usersControllers')


module.exports = {
    signup, login, logout,
    getCurrent, changeUserSubscription,
    listContacts, getContactById, removeContact, addContact, updateContact, updateStatusContact, changeAvatarImg, verificationEmail, reVerificationEmail
}
