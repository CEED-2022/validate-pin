
function validateContentType(req, res, next) {
  if (req.is('application/x-www-form-urlencoded')) return next();

  res.status(400).send('Invalid content-type');
  return false;
}

function validateFieldNumber(req, res, next) {
  if(Object.keys(req.body).length === 1) return next();

  res.status(400).send('Expected a single field "PIN"')
  return false;
}

function validatePinLength(req, res, next) {
  if(req.body?.PIN?.length === 5) return next();

  res.status(400).send('Expected a five digit PIN')
  return false;
}

function handler(req, res) {
  if (Math.random() >= 0.5) {
    res.status(401).send('Invalid PIN')
  } else {
    res.send('OK')
  }
}

function install(app) {
  app.post(
    '/validate',
    validateContentType,
    validateFieldNumber,
    validatePinLength,
    handler)
}


export {
  install
}
