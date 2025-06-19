import ImageKit from 'imagekit';
import envConfig from '../../config/env.config';

const imagekit = new ImageKit({
  publicKey: envConfig.imagekit.publickey as string,
  privateKey: envConfig.imagekit.privatekey as string,
  urlEndpoint: envConfig.imagekit.urlEndpoint as string,
});

export default imagekit;
