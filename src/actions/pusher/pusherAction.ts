"use server"

import { pusherServer } from "@/lib/pusher/server";
import { db } from "@/server/db";

export async function triggerPusher({ message, roomId }: { message: string, roomId: string }) {
    await pusherServer.trigger(roomId, "incoming-message", { message });
}

export async function joinRoomAction() {
    try {
        const newRoom = await db.room.create({
            data: {
                name: "demo"
            }
        })

        return { roomId: newRoom.id }
    } catch (err) {
        console.log(err)
    }
}

