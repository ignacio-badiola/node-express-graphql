const express = require('express');

const router = new express.Router();

router.use((err, req, res, next) => {
  const status = err.statusCode || 500;
  const error = {
    message: err.message,
    details: err.details,
    status
  };
  console.log(error);
  res.status(status).json(error);
});

module.exports = router;