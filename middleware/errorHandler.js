// error handling middleware
function errorHandler(err, req, res) {
  // check if the error has a status code, otherwise default to 500
  const statusCode = err.statusCode || 500;

  // send error response
  res.status(statusCode).json({
    error: {
      message: err.message,
      status: statusCode,
      stack: err.stack,
    },
  });
}

// export the middleware function
module.exports = errorHandler;
