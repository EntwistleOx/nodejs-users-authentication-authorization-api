var express = require('express');
var router = express.Router();
const models = require('../models');
const User = models.User;
const Role = models.Role;
const Sequelize = require('sequelize');
const { isAuthenticated } = require('../middlewares/authentication');

/* GET - list all users. */
router.get('/', isAuthenticated, async (req, res) => {
  try {
    const users = await User.findAll({include: [{model: Role}]});
    res.status(200).send(users)
  } catch (error) {
    res.status(400).send(error)
  }
});

/* POST - create a user. */ 
router.post('/', isAuthenticated, async (req, res, next) => {
  try {
    const { name, username } = req.body;
    const newUser = await User.create({
        name,
        username        
    });
    if(newUser) {
      res.status(201).send(newUser)
    }
  } catch (error) {
    res.status(400).send(error)
  }
})

/* PATCH - update a user */
router.patch('/:id', isAuthenticated, async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id)
    if(!user) {
      res.status(404).send('User not found')
    }else{
      // Update users data
      const updates = Object.keys(req.body)
      updates.forEach((updateField) => user[updateField] = req.body[updateField])
      const updated = await user.save()

      // Assing Role
      if(req.body.roles && req.body.roles != null) {
        const slugs = req.body.roles.split(',');
        const roles = await Role.findAll({ where: {slug: slugs}});
        await user.setRoles(roles);
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
    const user = await User.findByPk(id)
    if(!user) {
      res.status(404).send('User not found')
    } else {
      const deleted = await user.destroy()
      if(deleted){
          res.status(200).send(deleted)
      }
    }
  } catch (error) {
      res.status(400).send(error)
  }
})
module.exports = router;
