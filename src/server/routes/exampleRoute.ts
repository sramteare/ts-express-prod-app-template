import { Router } from 'express';
import { getTwoPlusTwo } from '../services/exampleSum';
import i18n from 'i18n';
const router = Router();
/* GET users listing. */
router.get('/', async (req, res) => {
  const val = await getTwoPlusTwo();
  //throw new Error('Had a bug');
  res.json({ data: `${i18n.__('Hello World')} 🌎!!` });
});

export default router;
