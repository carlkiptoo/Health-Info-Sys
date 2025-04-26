export const apiKeyAuth = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];

    const validApiKey = process.env.API_KEY;

    if (!apiKey || apiKey !== validApiKey) {
        return res.status(401).json({message: 'Invalid API key'});
    }

    next();
}