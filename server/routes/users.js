// const express = require('express');
import express from 'express';

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, _next) => {
  res.send('<h1 style="color: blue;">Lista de Amigas</h1>');
});

export default router;
