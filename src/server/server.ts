import dotenv from 'dotenv';
dotenv.config();
import app from './app';

const port = Number(process.env.PORT);
if (isNaN(port)) throw new Error('Port not configured.');
app.listen(port, () => {
  console.log(`running at https://localhost:${port}`);
});
