function errorHandler(err, req, res, next){
	return res.status(err. status || 500).json({
		err:{
			message: err.message || "Oops! Something is not quite right."
		}
	})
}

module.exports = errorHandler;