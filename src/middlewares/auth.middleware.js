const jwt = require('../utils/token');

const authMiddleware = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      message: 'Token not found',
    });
  }

  const [, token] = authorization.split(' ');  

  try {
    const claims = jwt.verifyToken(token);
    res.locals.user = {
      id: claims.sub,
      role: claims.role,
    };
  } catch (err) {
    console.log(err.message);
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  next();
};

module.exports = authMiddleware;