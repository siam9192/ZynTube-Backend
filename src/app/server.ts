import app from './app';
import envConfig from './config/env.config';

async function main() {
  try {
    app.listen(5000, () => {
      console.log('Server is connected');
    });
  } catch (error) {
    console.log(error);
  }
}

main();
