import { z } from 'zod';


const googleCallback = z.object({
  accessToken:z.string().nonempty()
}
)


export default {
  googleCallback
}


