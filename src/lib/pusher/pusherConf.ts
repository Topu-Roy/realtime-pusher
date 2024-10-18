import { env } from "@/env";
import Pusher from "pusher";
import PusherClient from 'pusher-js';

export const pusherServer = new Pusher({
    appId: env.PUSHER_APP_ID,
    key: env.PUSHER_KEY,
    secret: env.PUSHER_SECRET,
    cluster: env.PUSHER_CLUSTER,
    useTLS: true,
});

export const pusherClient = new PusherClient(env.PUSHER_KEY, {
    cluster: env.PUSHER_CLUSTER,
    authEndpoint: "/api/pusher-auth",
    authTransport: 'ajax',
    auth: {
        headers: {
            "Content-Type": "application/json"
        }
    }
});