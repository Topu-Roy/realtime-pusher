import { env } from "@/env";
import Pusher from "pusher";

export const pusherServer = new Pusher({
    appId: env.PUSHER_APP_ID,
    key: env.NEXT_PUBLIC_PUSHER_KEY,
    secret: env.PUSHER_SECRET,
    cluster: env.NEXT_PUBLIC_PUSHER_CLUSTER,
    useTLS: true,
});