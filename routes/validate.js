
function validateContentType(req, res) {
  if (req.is('application/x-www-form-urlencoded')) return true;

  res.status(400).send('Invalid content-type');
  return false;
}

function validateFieldNumber(req, res) {
  if(Object.keys(req.body).length === 1) return true;

  res.status(400).send('Expected a single field "PIN"')
  return false;
}

function validatePinLength(req, res) {
  if(req.body?.PIN?.length === 5) return true;

  res.status(400).send('Expected a five digit PIN')
  return false;
}

function validate(req, res) {
  if(!validateContentType(req, res)) return;
  if(!validateFieldNumber(req, res)) return;
  if(!validatePinLength(req, res)) return;

  if (Math.random() >= 0.5) {
    res.status(401).send('Invalid PIN')
  } else {
    res.send('OK')
  }
}


export default validate
