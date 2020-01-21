const User = require('../models/').User;
const Role = require('../models/').Role;

async function assignRole(){
    const user = await User.findOne({ where: {username: 'juandiaz'}});
    const roles = await Role.findAll({ where: {slug: 'superadmin'}});
    await user.addRole(roles);
}

async function assignRoles() {
    const user = await User.findOne({ where: {username: 'juandiaz'}});
    const roles = await Role.findAll({ where: {slug: ['ejecutivo', 'reportes']}});
    await user.addRoles(roles);
}

async function removeRoles() {
    const user = await User.findOne({ where: {username: 'juandiaz'}});
    const roles = await Role.findAll({ where: {slug: ['superadmin', 'reportes']}});
    await user.removeRoles(roles);
}

// assignRole()
// assignRoles()
// removeRoles()

// assignRoles
// removeRoles
// getRoles

// friend.getPugs()
// friend.addPug(pug)
// friend.addPugs(pugsArray)
// friend.setPugs(pugsArray)
// friend.removePug(pug)
// friend.removePugs(pugsArray)