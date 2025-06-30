import { z } from "zod";

const createSubscriber = z.object({
    channelId:z.string().nonempty()
})


export default {
    createSubscriber
}