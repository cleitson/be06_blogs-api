const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.sendStatus(401);
  }
  const [, token] = authorization.split(' ');
  
  try {
    const claims = jwt.verify(token, 'senha');
    res.locals.user = {
      id: claims.sub,
      role: claims.role,
    };
  } catch (err) {
    console.log(err.message);
    return res.sendStatus(401);
  }

  next();
};

module.exports = authMiddleware;