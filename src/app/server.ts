import app from './app';
import envConfig from './config/env.config';
import ngrok from '@ngrok/ngrok';
import prisma from './prisma';
async function main() {
  console.log(await prisma.$connect());
  try {
    app.listen(5000, () => {
      console.log('Server is connected');
    });
  } catch (error) {
    console.log(error);
  }
}

main();

// ngrok
//   .connect({
//     addr: 5000,
//     subdomain: 'concise-duckling-champion.ngrok-free.app',
//     authtoken_from_env: true,
//   })
//   .then((listener) => console.log(`Ingress established at: ${listener.url()}`));
