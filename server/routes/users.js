//const express = require('express');
import express from 'express';
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('<h1 style="color: blue;">Lista de usuarios no deseados</h1>');
});

export default router;
