var express = require('express');
var router = express.Router();
const models = require('../models');
const Role = models.Role;
const Permission = models.Permission;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { isAuthenticated } = require('../middlewares/authentication');

/* GET - list all roles. */
router.get('/', isAuthenticated, async (req, res) => {
  try {
    const roles = await Role.findAll({
        //List all roles except Superadmin
        where: {
            id: {
                [Op.ne]: [ 1 ]
            }
        }
    });
    res.status(200).send(roles)
  } catch (error) {
    res.status(400).send(error)
  }
});

/* POST - create a user. */ 
router.post('/', isAuthenticated, async (req, res) => {
  try {
    const { name, slug, description, special } = req.body;
    const newRole = await Role.create({
        name, 
        slug, 
        description, 
        special
    });
    if(newRole) {
      res.status(201).send(newRole)
    }
  } catch (error) {
    res.status(400).send(error)
  }
})

/* PATCH - update a user */
router.patch('/:id', isAuthenticated, async (req, res) => {
  try {
    const { id } = req.params;
    const role = await Role.findByPk(id)
    if(!role) {
      res.status(404).send('Role not found')
    }else{
      // Update role
      const updates = Object.keys(req.body)
      updates.forEach((updateField) => role[updateField] = req.body[updateField])
      const updated = await role.save()

      // Assing Permission
      if(req.body.permissions && req.body.permissions != null) {
        const slugs = req.body.permissions.split(',');
        const permissions = await Permission.findAll({ where: {slug: slugs}});
        await role.setPermissions(permissions);
      }

      if(updated){
          res.status(200).send(updated)
      }
    }
  } catch (error) {
      res.status(400).send(error)
  }
})

/* DELETE - delete a user */
router.delete('/:id', isAuthenticated, async (req, res) => {
  try {
    const { id } = req.params;
    const role = await Role.findByPk(id)
    if(!role) {
      res.status(404).send('Role not found')
    } else {
      const deleted = await role.destroy()
      if(deleted){
          res.status(200).send(deleted)
      }
    }
  } catch (error) {
      res.status(400).send(error)
  }
})
module.exports = router;
