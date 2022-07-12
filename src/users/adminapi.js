/**
 * @topology_group adminsapi
 */


 const admin = require('express').Router();

 async function getRegisteredAdminsList(req, res) {
     const adminList = ["Sidhartha", "Sai", "Ajitesh"];
     res.send(adminList);
 }
 
 admin.get('/v1/admins', getRegisteredAdminsList);
 
 module.exports = admin;
 