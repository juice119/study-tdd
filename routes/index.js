import express from 'express';
import fs from 'fs';

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  try {
    const page = fs.readFileSync(`${APP_ROOT}/views/mainPage.html`).toString('utf8');
    res.send(page);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

module.exports = router;
