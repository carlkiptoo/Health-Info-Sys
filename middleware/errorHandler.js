export const errorHandler = (err, req, res, next) => {
    console.error('Unhandled error', err.message);

    res.status(err.statusCode || 500).json({
        message: err.message,
        error: err.error || 'Internal server error',
    })
}